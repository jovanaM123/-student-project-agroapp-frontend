import { Component, OnInit } from '@angular/core';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Magacin } from 'src/app/magacin.module';

@Component({
  selector: 'app-narudzbine',
  templateUrl: './narudzbine.component.html',
  styleUrls: ['./narudzbine.component.css']
})
export class NarudzbineComponent implements OnInit {
 
  constructor(private servis: PoljoprService) { }

  ngOnInit(): void {
    this.dohvNar();
  }
  public filter: string;
  narudzbine: Array<Magacin>;

  dohvNar(){
    let username = localStorage.getItem('logged');

    this.servis.sveNarudzbine(username).subscribe((data: Array<Magacin>) =>{
      this.narudzbine = data;
    });
  }

  sortNaziv(){
    let username = localStorage.getItem('logged');

    this.servis.sveNarudzbine(username).subscribe((data: Array<Magacin>) =>{
      data.sort((one, two) => (one.name < two.name ? -1 : 1));
      this.narudzbine = data;
    });

  }

  sortPr(){
    let username = localStorage.getItem('logged');

    this.servis.sveNarudzbine(username).subscribe((data: Array<Magacin>) =>{
      data.sort((one, two) => (one.company < two.company ? -1 : 1));
      this.narudzbine = data;
    });

  }

  sortKol(){
    let username = localStorage.getItem('logged');

    this.servis.sveNarudzbine(username).subscribe((data: Array<Magacin>) =>{
      data.sort((one, two) => {
        let kol1 = +(one.amount)
        let kol2 = +(two.amount)
        return kol1 < kol2 ? -1 : 1
      });
      this.narudzbine = data;
    });

  }

  obrisi(kod){
    this.servis.brisanjeNarudzbine(kod).subscribe((mess: string) => {
      if(mess==="ok"){
        alert("Uspešno obrisana narudžbina");
        location.reload();
      }
    });
  }

}
