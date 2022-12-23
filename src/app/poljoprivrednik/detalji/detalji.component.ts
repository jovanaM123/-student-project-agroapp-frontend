import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/product.module';
import { Rate } from 'src/app/rate.module';

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {

  constructor(alertConfig: NgbAlertConfig, private route: ActivatedRoute,
    private router: Router, private servis: PoljoprService) {
    alertConfig.type = 'warning';
    alertConfig.dismissible = false;
   }

  ngOnInit(): void {
    this.codePr = this.route.snapshot.paramMap.get("codePr");
    this.dohvOcenu();
    this.dohvatiKomentare();
    this.korOcena();
    this.mozeDaKom();
    this.mozeDaOceni();
  }
  currentRate : String;
  codePr: String;
  komentari: Array<Comment>;
  ocena: String;
  kom: String;
  mozeK: Boolean = true;
  mozeO: Boolean = true;
  ocene: Array<Rate>;


  dohvatiKomentare(){
    this.servis.sviKomentari(this.codePr).subscribe((data: Array<Comment>)=> {
      this.komentari = data;
    })
  }

  korOcena(){
    this.servis.sveOcene(this.codePr).subscribe((pr: Array<Rate>)=> {
      this.ocene = pr;
    })
  }

  dohvOcenu(){
    this.servis.dohvatiOcenu(this.codePr).subscribe((data: String)=> {    
      this.ocena = data;
    })
  }

  mozeDaKom(){
    let username = localStorage.getItem('logged');

    this.servis.imaPrUMagacinu(this.codePr).subscribe(data =>{
      if(Object.keys(data).length == 0){ //nema prouizvod u magacinu ne moze da ga kom
        this.mozeK = false
      }  else {
        this.servis.imaKom(this.codePr,username).subscribe((pr: Comment)=> {
          if(pr === null){
            this.mozeK = true;
          } else {
            this.mozeK = false;
          }
        })
      }})

  }

  mozeDaOceni(){
    let username = localStorage.getItem('logged');
    this.servis.imaPrUMagacinu(this.codePr).subscribe(data =>{
      if(Object.keys(data).length == 0){ //nema prouizvod u magacinu ne moze da ga oceni
        this.mozeO = false
      }  else { // nema proveravamo da li vec ocenjivao
        this.servis.imaOcena(this.codePr,username).subscribe((pr: Rate)=> {
          if(pr === null){
            this.mozeO = true
          } else {
            this.mozeO = false
          }
        })
      }
    })

  }


  dodajKom(){
    let username = localStorage.getItem('logged');
    this.servis.dodajKoment(this.codePr,username, this.kom).subscribe(mess => {
      if(mess['uspeh']=='ok'){
        alert('dodat kom')
        location.reload()
      }
    })
  }

  dodajOcenu(){
    let username = localStorage.getItem('logged');
    this.servis.dodajOc(this.codePr,username,this.currentRate).subscribe(mess => {
      if(mess['uspeh']=='ok'){
        alert('dodata ocena')
        location.reload()
      } 
    })
  }


}
