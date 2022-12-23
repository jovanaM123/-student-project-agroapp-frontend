import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Magacin } from 'src/app/magacin.module';
import { PreduzeceService } from 'src/app/servisi/preduzece.service';
import { Firm } from 'src/app/pred.module';
import { Courier } from 'src/app/courier.module';

@Component({
  selector: 'app-preduzece-pocetna',
  templateUrl: './preduzece-pocetna.component.html',
  styleUrls: ['./preduzece-pocetna.component.css']
})
export class PreduzecePocetnaComponent implements OnInit {

  constructor(private router: Router, private servis: PreduzeceService) { }

  ngOnInit(): void {
    this.dohvatiNarudzbine();
  }

  


  narudzbine: Array<Magacin>;

  sortirajOpadajuce(){
    let username = localStorage.getItem('logged');
    this.servis.nazivFirme(username).subscribe((firma: Firm)=> {
      this.servis.sveNarudzbine(firma[0].name).subscribe((data: Array<Magacin>)=> {
        data.sort((a : Magacin,b: Magacin) => {
          var dateA = new Date(a.buy).getTime(); 
          var dateB = new Date(b.buy).getTime(); 
          return dateA < dateB ? 1 : -1;  
          
        })
        this.narudzbine = data;
      });
    })

  }

  sortirajRastuce(){
    let username = localStorage.getItem('logged');
    this.servis.nazivFirme(username).subscribe((firma: Firm)=> {
      this.servis.sveNarudzbine(firma[0].name).subscribe((data: Array<Magacin>)=> {
        data.sort((a : Magacin,b: Magacin) => {
          var dateA = new Date(a.buy).getTime(); 
          var dateB = new Date(b.buy).getTime(); 
          return dateA > dateB ? 1 : -1;  
          
        })
        this.narudzbine = data;
      });
    })

  }


  dohvatiNarudzbine(){
    let username = localStorage.getItem('logged');
    this.servis.nazivFirme(username).subscribe((firma: Firm)=> {
      this.servis.sveNarudzbine(firma[0].name).subscribe((data: Array<Magacin>)=> {
          this.narudzbine = data;
      });
    })
  }

 

  prihvati(kod, garden, username, kolicina){
    let klasa = Array.from( document.getElementsByClassName(kod) as HTMLCollectionOf<HTMLElement>);
    this.servis.nisuSlobodni().subscribe((pr: Courier)=> {
      if(pr == undefined) {
        klasa[0].style.backgroundColor = "red";
        alert("nemate slobodnih kurira")
      } else {
        this.router.navigate(['/kuriri/' + kod + '/' + garden + '/' + username + '/' + kolicina]);
      }
    })
  }

  odbij(kod, am, ow){
    this.servis.obrisiNarudzbinu(kod, am, ow).subscribe((mess: String)=> {
      if(mess=='ok'){
        location.reload()
      }
    })

  }

}
