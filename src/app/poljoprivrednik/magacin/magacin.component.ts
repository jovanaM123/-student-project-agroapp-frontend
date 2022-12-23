import { Component, OnInit } from '@angular/core';
import { Magacin } from 'src/app/magacin.module';
import { PoljoprService } from 'src/app/servisi/poljopr.service';

@Component({
  selector: 'app-magacin',
  templateUrl: './magacin.component.html',
  styleUrls: ['./magacin.component.css']
})
export class MagacinComponent implements OnInit {

  constructor(private servis: PoljoprService) { }

  ngOnInit(): void {
    this.dohvProizvode();
  }

  public filter: string;


  magacini: Array<Magacin>;

  dohvProizvode(){
    let username = localStorage.getItem('logged');

    this.servis.sviProizvodi(username).subscribe((data: Array<Magacin>) =>{
      this.magacini = data;
    });
  }


  sortNaziv(){
    let username = localStorage.getItem('logged');

    this.servis.sviProizvodi(username).subscribe((data: Array<Magacin>) =>{
      data.sort((one, two) => (one.name < two.name ? -1 : 1));
      this.magacini = data;
    });

  }

  sortPr(){
    let username = localStorage.getItem('logged');

    this.servis.sviProizvodi(username).subscribe((data: Array<Magacin>) =>{
      data.sort((one, two) => (one.company < two.company ? -1 : 1));
      this.magacini = data;
    });

  }

  sortKol(){
    let username = localStorage.getItem('logged');

    this.servis.sviProizvodi(username).subscribe((data: Array<Magacin>) =>{
      data.sort((one, two) => {
        let kol1 = +(one.amount)
        let kol2 = +(two.amount)
        return kol1 < kol2 ? -1 : 1
      });
      this.magacini = data;
    });

  }

}
