import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PreduzeceService } from 'src/app/servisi/preduzece.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalji-proiz',
  templateUrl: './detalji-proiz.component.html',
  styleUrls: ['./detalji-proiz.component.css'],
  providers: [NgbAlertConfig]
})
export class DetaljiProizComponent implements OnInit {

  constructor(alertConfig: NgbAlertConfig,private route: ActivatedRoute, private router: Router,
     private servis: PreduzeceService) {
      alertConfig.type = 'warning';
      alertConfig.dismissible = false;
      }

  ngOnInit(): void {
    this.codePr = this.route.snapshot.paramMap.get("codePr");
    this.dohvOcenu();
    this.dohvKom();
  }


  codePr: String;
  komentari: Array<Comment>;
  ocena: String;
  dohvKom(){
        this.servis.sviKomentari(this.codePr).subscribe((kom: Array<Comment>) => {
          this.komentari = kom;
        })
  }

  dohvOcenu(){
    this.servis.dajOcenu(this.codePr).subscribe((name: String)=> {
      this.ocena = name;
    })

  }

}
