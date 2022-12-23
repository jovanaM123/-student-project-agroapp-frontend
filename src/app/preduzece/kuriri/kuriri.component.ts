import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PreduzeceService } from 'src/app/servisi/preduzece.service';
import { Courier } from 'src/app/courier.module';
import { HereService } from 'src/app/here.service';
import * as haversine from 'haversine';

@Component({
  selector: 'app-kuriri',
  templateUrl: './kuriri.component.html',
  styleUrls: ['./kuriri.component.css']
})
export class KuririComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private servis: PreduzeceService, private here: HereService) { }

  ngOnInit(): void {
    this.codePr = this.route.snapshot.paramMap.get("codePr");
    this.rasadnik = this.route.snapshot.paramMap.get("garden");
    this.narucilac = this.route.snapshot.paramMap.get("username");
    this.kolicina = this.route.snapshot.paramMap.get("kolicina");
    this.dohvKurire();
  }

  codePr: String;
  narucilac: String
  rasadnik: String;
  kolicina: String;
  kuriri: Array<Courier>;


  dohvKurire(){
    this.servis.nisuSlobodni().subscribe((pr: Array<Courier>)=>{
      this.kuriri= pr;
    });
  } 



    salji(ime){
    
    //dohvatanje grada gde se nalazi rasadnik da bih izracunala rastojanje
    this.servis.grad(this.rasadnik, this.narucilac).subscribe((grad: string)=> {
      //dohvatanje long i lat grada
      this.here.getAddress(grad).then(result => {
        let pozicije = result[0].Location.DisplayPosition;
        let lat = pozicije.Latitude;
        let lon = pozicije.Longitude;

        //racunanje rastojanja
        const start = {
          latitude: 44.815071,
          longitude: 20.460480
        }
        const end = {
          latitude: lat,
          longitude: lon
        }
    
     const rastojanje = (haversine(start, end)).toString()
     const s = parseInt(rastojanje)
     const vreme = Math.floor(s/50)

     //setujem vreme dokad je kurir zauzet

     let today = new Date();
     today.setHours(today.getHours() + vreme);

      //pozovem funkciju da updejtujem kurira

      this.servis.zauzmiKurira(ime, today).subscribe((mess: string) => {
        if(mess == "ok") {

          //updejtuj magacin 
          this.servis.dodajUMagacin(this.codePr, this.rasadnik, this.narucilac).subscribe((m: string)=> {
            if(m == "ok") {

              //updejtuj producte 
              this.servis.umanjiKolProdukta(this.codePr, this.kolicina).subscribe((por: string) => {
                if(por == "ok") {
                  alert('Uspešno poslata narudžbina')
                  this.router.navigate(['/predPocetna']);
                }
              })
            }
          })
        }

      })
      }, error => {
          console.error(error);
      });
    })

  }


  



}
