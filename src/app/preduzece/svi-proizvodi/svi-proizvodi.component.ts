import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreduzeceService } from 'src/app/servisi/preduzece.service';
import { Product } from 'src/app/product.module';
import { Firm } from 'src/app/pred.module';

@Component({
  selector: 'app-svi-proizvodi',
  templateUrl: './svi-proizvodi.component.html',
  styleUrls: ['./svi-proizvodi.component.css']
})
export class SviProizvodiComponent implements OnInit {

  constructor(private router: Router, private servis: PreduzeceService) { }

  ngOnInit(): void {
    this.dohvProizvode();
  }

  proizvodi: Array<Product>;

  dohvProizvode(){
    let username = localStorage.getItem('logged');
    this.servis.nazivFirme(username).subscribe((firma: Firm)=> {
      this.servis.sviProizvodi(firma[0].name).subscribe((data: Array<Product>) => {
        this.proizvodi = data;
      })
  })

  }


  izbrisi(code){
    this.servis.obrisiProizvod(code).subscribe((message: String)=> {
      if(message == "ok") {
        location.reload();
      }
    })
  }

}
