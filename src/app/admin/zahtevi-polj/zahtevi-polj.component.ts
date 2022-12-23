import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/servisi/admin.service';
import { Farmer } from 'src/app/polj.module';

@Component({
  selector: 'app-zahtevi-polj',
  templateUrl: './zahtevi-polj.component.html',
  styleUrls: ['./zahtevi-polj.component.css']
})
export class ZahteviPoljComponent implements OnInit {

  constructor(private router: Router, private servis: AdminService) { }

  ngOnInit(): void {
    this.zFarmeri();
  }

farmeri: Array<Farmer>;

zFarmeri(){
  this.servis.zahteviFarmeri().subscribe((data: Array<Farmer>) => {
    this.farmeri = data;
  });
}

prihvati(username) {
  this.servis.prihvatiPolj(username).subscribe((poruka: string) => {
    location.reload();
  });
}
odbij(username) {
  this.servis.odbijPolj(username).subscribe((poruka: string) => {
    location.reload();
  });
}
}
