import { Component, OnInit, Input } from '@angular/core';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Garden } from 'src/app/rasadnik.module';
import { Plant } from 'src/app/plant.module';
import { Product } from 'src/app/product.module';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `<div class="modal-header">
  <h4 class="modal-title">Informacije o sadnici</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
<div class="modal-boy">
<div class="container">
   Sadnica: {{sadnica.name}} <br/>
   Proizvodjac: {{proizvodjac}} <br/>
   <div class="progress">
  <div class="progress-bar progress-bar-success" role="progressbar" attr.aria-valuenow={{napredak}}
  aria-valuemin="0" aria-valuemax="100" style="width: 50px">
   {{napredak}}  %
  </div></div> <br/>
  <button class="btn btn-info" (click)="dodajPr()"> DODAJ PREPARAT OVOJ SADNICI </button>
   </div>
</div>
</div>
`
})
export class NgbdModalContent {
  @Input() sadnica;

  constructor(public activeModal: NgbActiveModal, private router: Router, private servis: PoljoprService) {
    
  }  
  ngOnInit() {
   this.dohvatiProizvodjaca();
   this.napredak = this.sadnica.napredak;
  }
  napredak: String;
  proizvodjac: String;

  dohvatiProizvodjaca(){
    this.servis.sviKupljeni(this.sadnica.sadnica).subscribe((data: Product)=>{
      this.proizvodjac = data[0].owner;
    })
  }

  dodajPr(){
    this.activeModal.close('Cross click')
    this.router.navigate(['/preparati/' + this.sadnica.garden + '/' +
     this.sadnica.w + '/' + this.sadnica.h]);
  }

  }


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,private modalService: NgbModal,
    private router: Router, private servis: PoljoprService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name");
    this.dohvRasadnik();
    this.dohvSadnice();
    this.zauzeti();
  }

  name: String;
  rasadnik: Garden;
  red: Array<number>;
  kolona: Array<number>;
  redovi: Array<number>;
  kolone: Array<number>;
  sadnice: Array<Plant>;

  prikaz(w,h){

    let moze: Boolean = true;
    for(let i = 0; i< this.redovi.length;i++){
          if(w == this.redovi[i] && h == this.kolone[i]){
            moze = false;  
      }
    }

    return moze;
  }


  open(sadnica) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.sadnica = sadnica;
  }


  dohvRasadnik(){
    this.servis.dohvatiRasadnik(this.name).subscribe((data: Garden)=> {
      this.rasadnik = data[0];
      let redovi = data[0].width;
      let kolone = data[0].heigth;
      let y: number;
      y= +redovi
      let z: number;
      z= +kolone

      let niz = new Array()
      for(let i=1; i <= y; i++){
        niz.push(i)
      }
      this.red = niz

      let niz2 = new Array()
      for(let i=1; i <= z; i++){
        niz2.push(i)
      }
      this.kolona = niz2

    })
  }


  dohvSadnice(){
    let username= localStorage.getItem('logged');

    this.servis.sveZasadjene(username, this.name).subscribe((data: Array<Plant>)=> {
      this.sadnice = data;
    })

  }

  izvadi(w,h,kod){
    let username= localStorage.getItem('logged');

    this.servis.izvadiSadnicu(username, this.name,w,h,kod).subscribe((mess: String)=> {
      if(mess=="ok"){
        alert('Uspesno ste izvadili sadnicu');
        location.reload()
      }
    })

  }

  zauzeti(){
    let username= localStorage.getItem('logged');
    //da li moze da se sadi, prvo dohvatim sadnice
    this.servis.sveZasadjene(username, this.name).subscribe((data: Array<Plant>)=> {
      
      let red = new Array();
      let kol = new Array()

      data.forEach(element => {
        let r = element.w;
        let k = element.h;
        red.push(r);
        kol.push(k);
      });

       this.redovi = red;
       this.kolone = kol;
    })
  }

  zasadiS(w,h){
   this.router.navigate(['sadjenje/' + this.name + '/' + w + '/' + h]);
  }

  dodajT(temp){
    let y: number;
    y= +temp
    let z: number
    z = y + 0.5;

    this.servis.updatejtujT(z.toString(), this.name).subscribe((mess: String)=>{
        if(mess=="ok"){
          location.reload()
        }
    })

  }

  oduzmiT(temp){
    let y: number;
    y= +temp
    let z: number
    z = y - 0.5;
    this.servis.updatejtujT(z.toString(), this.name).subscribe((mess: String)=>{
      if(mess=="ok"){
        location.reload()
      }
  })
  }

  dodajH20(voda){
    let y: number;
    y= +voda
    let z: number
    z = y + 1;
    this.servis.updatejtujV(z.toString(), this.name).subscribe((mess: String)=>{
      if(mess=="ok"){
        location.reload()
      }
  })

  }

  oduzmiH20(voda){
    let y: number;
    y= +voda
    let z: number
    z = y - 1;
    this.servis.updatejtujV(z.toString(), this.name).subscribe((mess: String)=>{
      if(mess=="ok"){
        location.reload()
      }
  })

  }

}
