import { Component, OnInit } from '@angular/core';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Magacin } from 'src/app/magacin.module';


@Component({
  selector: 'app-sadjenje',
  templateUrl: './sadjenje.component.html',
  styleUrls: ['./sadjenje.component.css']
})
export class SadjenjeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private servis: PoljoprService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name");
    this.w = this.route.snapshot.paramMap.get("w");
    this.h = this.route.snapshot.paramMap.get("h");
    this.dohvSadnice();
  }

  name: String;
  w: String;
  h: String;
  sadnice: Array<Magacin>;

  dohvSadnice(){
    let username = localStorage.getItem('logged');

    this.servis.sadniceRasadnika(username, this.name).subscribe((data: Array<Magacin>)=> {
        this.sadnice = data;
    })
  }

  zasadiSadnicu(naziv, kod, trKolicina){
    let username = localStorage.getItem('logged');
    let kolicina:number = +trKolicina;
    kolicina = kolicina - 1;

    if(kolicina<0) {
      alert('Zao nam je ali nemate vise ove sadnice, dokupite jos!');
    } else {
      this.servis.mozeDaZasadi(this.w, this.h, kod).subscribe(p => {
        if(p == 'ok') {
          this.servis.smanjiKolicinu(username,this.name, kod, kolicina.toString()).subscribe((mess: String)=> {
            if(mess=="ok"){
              this.servis.zasadi(naziv,username,this.name, this.w, this.h, kod).subscribe((mess)=> {
                if(mess["uspeh"]=="ok"){
                  //smanjis slobodna mesta a br sadnica povecas
                  this.servis.azurirajRasadnik(username, this.name).subscribe((m)=> {
                    if(m=="ok"){
                    alert('Uspesno ste zasadili sadnicu');
                    this.router.navigate(['/dashb/' + this.name]);
                    }
                  })
    
                }
            })
            }
          })
        } else if(p == 'nok'){
          alert('Ova sadnica ne moze da se zasadi ovde. Proverite ogranicenja');
        } else {
          alert('Doslo je do greske, molimo vas pokusajte kasnije');
        }
      })
    }

  }
  
}
