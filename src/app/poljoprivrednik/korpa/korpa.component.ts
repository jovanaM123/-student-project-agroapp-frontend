import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.module';
import { Router } from '@angular/router';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Garden } from 'src/app/rasadnik.module';


@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  constructor(private router: Router, private servis: PoljoprService) { }

  ngOnInit(): void {
    this.sadnice = JSON.parse(localStorage.getItem('korpa'));
    this.sviRasad();
  }

  novaKol: String;
  kolicina: String;
  sadnice: Array<Product>;
  rasadnik: String;
  rasadnici: Array<Garden>;

  obrisi(kod){
    let pom = this.sadnice.filter(sadn => sadn.codePr !== kod)
    localStorage.setItem('korpa', JSON.stringify(pom));
    location.reload();      
  }

  sviRasad(){
    let username = localStorage.getItem('logged');
    this.servis.sviRasadnici(username).subscribe((data: Array<Garden>)=> {
      this.rasadnici = data;
    })  
  }

  

  kupi(kod){
    let username = localStorage.getItem('logged');
    if(this.kolicina == undefined || this.rasadnik == null){
      alert("morate uneti kolicinu i rasadnik");
    } else {
      this.servis.dohvatiKol(kod).subscribe((data: Product)=> {     
        this.novaKol = data[0].amount; 
        let y: number;
        y= +this.novaKol 
        let z: number
        z= +this.kolicina    
        let uKol = y - z;

        if(uKol<0){
          alert("Zao nam je nemamo toliku kolicinu ovog proizvoda");
        } else{
        //umanjuj kolicinu
                this.servis.sviKupljeni(kod).subscribe((data: Product)=> {
                  this.servis.kupiPr(kod, data[0].name, data[0].owner, this.kolicina,
                    data[0].type, username, this.rasadnik).subscribe((message: String)=> {
                    if(message["uspeh"] == "ok") {
                      alert("Kupovina proizvoda je obavljena uspesno");
                      let pom = this.sadnice.filter(sadn => sadn.codePr !== kod)
                      localStorage.setItem('korpa', JSON.stringify(pom));
                      location.reload();  
                    }
                  })
                })

          }
      });
    }

    }
}
