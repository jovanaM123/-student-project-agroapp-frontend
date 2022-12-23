import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Product } from 'src/app/product.module';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { isString } from 'util';
import { Magacin } from 'src/app/magacin.module';

@Component({
  selector: 'ngbd-modal-content',
  template: `<div class="modal-header">
  <h4 class="modal-title">Zdravo</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
<div class="modal-boy">
<div class="container">
      <button class="btn btn-success"  (click)="activeModal.close('Save click')"> Nastavi kupovinu </button>
      <button class="btn btn-warning"(click)="idiNaKorpu()"> Idi na korpu </button>
</div>
</div>
`
})
export class NgbdModalContent {
  @Input() sadnica;

  constructor(public activeModal: NgbActiveModal, private router: Router,
     private servisP: PoljoprService) {
    
  }  
  ngOnInit() {
    this.dodajKol();
  }



  dodajKol(){

    this.servisP.imaPrUMagacinu(this.sadnica.codePr).subscribe((data: Magacin)=> {
      if(Object.keys(data).length == 0){
        if(localStorage.getItem('korpa') == null) {
          let niz = []
          niz.push(this.sadnica);
          localStorage.setItem('korpa', JSON.stringify(niz));
        } else {
          let pomocni = JSON.parse(localStorage.getItem('korpa'));
           pomocni.push(this.sadnica);
          localStorage.setItem('korpa', JSON.stringify(pomocni));
        }

      } else {
        alert('Ovaj proizvod postoji vec u vasih narudzbinama ili magacinu!')
        this.activeModal.close('Save click')
      }

    })

  }

  idiNaKorpu(){
    this.activeModal.close('Save click')
    this.router.navigate(['/korpa']);
  }

}


@Component({
  selector: 'app-sadnice',
  templateUrl: './sadnice.component.html',
  styleUrls: ['./sadnice.component.css']
})
export class SadniceComponent implements OnInit {

  panelOpenState1 = false;


  constructor(private modalService: NgbModal, private servis: PoljoprService) { }

  ngOnInit(): void {
    this.dohvSadnice();
  }

  
  open(sadnica) {
    let kol = "";
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.sadnica = sadnica;
  }

  sadnice: Array<Product>;


  dohvSadnice(){
    this.servis.sveSadnice().subscribe((data: Array<Product>) => {
      this.sadnice = data;
    })
 }
   

}
