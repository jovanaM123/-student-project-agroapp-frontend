import { Component, OnInit } from '@angular/core';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Router } from '@angular/router';
import { Garden } from 'src/app/rasadnik.module';

@Component({
  selector: 'app-dodavanje-rasadnika',
  templateUrl: './dodavanje-rasadnika.component.html',
  styleUrls: ['./dodavanje-rasadnika.component.css']
})
export class DodavanjeRasadnikaComponent implements OnInit {
  

  constructor(private router: Router,private servis: PoljoprService) { }

  ngOnInit(): void {
  }

  name: String;
  place: String;
  sirina: string;
  duzina: string;
  

  dodaj() {
    let username = localStorage.getItem('logged');
    let kvadratura = Math.floor(parseInt(this.sirina) * parseInt(this.duzina));
    let broj = kvadratura.toString();
    
    this.servis.okImeRasadnika(username, this.name).subscribe((garden: Garden) => {
      if(Object.keys(garden).length === 0) {
        this.servis.dodajRasadnik(username, this.name, this.place, broj, this.sirina, this.duzina).subscribe((garden)=>{
              if(garden['uspeh'] === "ok"){
                alert('Rasadnik je dodat!');
                setTimeout(() => {
                  this.router.navigate(['/poljPocetna']);
                }, 500); 
              }  else {
                alert('Neuspeh');
              }
            });
      }  else {
        alert('Ime rasadnika je zauzeto! Probajte neko drugo ime');
      }
    })    

  }

}
