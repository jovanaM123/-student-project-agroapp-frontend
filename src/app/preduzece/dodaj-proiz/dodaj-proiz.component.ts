import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PreduzeceService } from 'src/app/servisi/preduzece.service';
import { Product } from 'src/app/product.module';
import { Firm } from 'src/app/pred.module';

@Component({
  selector: 'app-dodaj-proiz',
  templateUrl: './dodaj-proiz.component.html',
  styleUrls: ['./dodaj-proiz.component.css']
})
export class DodajProizComponent implements OnInit {


 constructor(private _formBuilder: FormBuilder, private servis:PreduzeceService) { }

  ngOnInit(): void {
    this.sviProizvodiFirme();
  }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  tip: String;
  ime: String;
  kol: String;
  sifra: String;
  opis: String;
  cena: String;
  nesme: String;
  proizvodi: Array<Product>;

  sviProizvodiFirme(){
    let username= localStorage.getItem('logged');
    let owner: String;

    this.servis.nazivFirme(username).subscribe((firma: Firm)=> {
      owner = firma[0].name;

    this.servis.sveSadnice(owner).subscribe((pr: Array<Product>) => {
      this.proizvodi = pr;
    });
  });

  }

  dodaj(){
    let username= localStorage.getItem('logged');
    let owner: String;

    this.servis.nazivFirme(username).subscribe((firma: Firm)=> {
      owner = firma[0].name;



    if(this.tip!=null){
      this.servis.okKod(this.sifra).subscribe((pr: Product)=> {
      if(pr === null) {
        this.servis.dodajProizvod(this.sifra,this.ime, owner, this.tip, this.kol,
          "5",this.cena, this.opis, this.nesme).subscribe(data => {
            if(data["uspeh"]=="ok"){
              alert("Uspesno ste dodali proizvod");
              location.reload();
            }
          })
      } else {
        alert("Sifra proizvoda mora biti unikatna");
      }

      })
  }
});


  }


}
