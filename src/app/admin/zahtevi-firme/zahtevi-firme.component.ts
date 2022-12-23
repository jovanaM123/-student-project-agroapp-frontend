import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servisi/admin.service';
import { Router } from '@angular/router';
import { Firm } from 'src/app/pred.module';

@Component({
  selector: 'app-zahtevi-firme',
  templateUrl: './zahtevi-firme.component.html',
  styleUrls: ['./zahtevi-firme.component.css']
})
export class ZahteviFirmeComponent implements OnInit {

  constructor(private router: Router, private servis: AdminService) { }

  ngOnInit(): void {
    this.zFirme();
  }

firme: Array<Firm>;

zFirme(){
  this.servis.zahteviFirme().subscribe((data: Array<Firm>) => {
    this.firme = data;
  });
}

prihvati(username) {
  this.servis.prihvatiFirmu(username).subscribe((poruka: string) => {
    location.reload();
  });
}

odbij(username) {
  this.servis.odbijFirmu(username).subscribe((poruka: string) => {
    location.reload();
  });
}

}
