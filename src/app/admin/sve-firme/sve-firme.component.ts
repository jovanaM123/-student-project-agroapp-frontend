import { Component, OnInit } from '@angular/core';
import { Firm } from 'src/app/pred.module';
import { AdminService } from 'src/app/servisi/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sve-firme',
  templateUrl: './sve-firme.component.html',
  styleUrls: ['./sve-firme.component.css']
})
export class SveFirmeComponent implements OnInit {

  constructor(private router: Router, private servis: AdminService) { }

  ngOnInit(): void {
    this.zFirme();
  }

firme: Array<Firm>;

zFirme(){
  this.servis.sviFirme().subscribe((data: Array<Firm>) => {
    this.firme = data;
  });
}

obrisi(username) {
  this.servis.odbijFirmu(username).subscribe((poruka: string) => {
    location.reload();
  });
}

}
