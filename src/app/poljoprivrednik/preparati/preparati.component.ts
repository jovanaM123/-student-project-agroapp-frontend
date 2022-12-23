import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Plant } from 'src/app/plant.module';
import { Magacin } from 'src/app/magacin.module';

@Component({
  selector: 'app-preparati',
  templateUrl: './preparati.component.html',
  styleUrls: ['./preparati.component.css']
})
export class PreparatiComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private servis: PoljoprService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name");
    this.w = this.route.snapshot.paramMap.get("w");
    this.h = this.route.snapshot.paramMap.get("h");
    this.dohvSadnicu();
    this.dohvPreparate();
  }
  
  name: String;
  w: String;
  h: String;
  sadnica: Plant;
  preparati: Array<Magacin>;
  prep: String;
  
  dohvSadnicu(){
    let username= localStorage.getItem('logged');

    this.servis.sadnica(username, this.name, this.w, this.h).subscribe((data: Plant)=> {
      this.sadnica = data[0];
    })

  }

  dohvPreparate(){
    let username= localStorage.getItem('logged');

    this.servis.preparatiRasadnika(username, this.name).subscribe((data: Array<Magacin>)=> {
      this.preparati = data;
    })
  }

  dodaj(kod){
    let username= localStorage.getItem('logged');

    this.servis.preparatNapredak(username, kod, this.name, this.w, this.h).subscribe((data: Plant)=> {
      let napredak = data[0].napredak;
      let n: number = +napredak;
      n = n + 10;
 
      this.servis.preparatiDodaj(username, kod,this.name, n.toString(), this.w, this.h).subscribe(
        (mess: String)=> {
          if(mess == 'ok'){
            alert('Uspesno dodat preparat ovoj sadnici');
          }
        })

    })

  }

}
