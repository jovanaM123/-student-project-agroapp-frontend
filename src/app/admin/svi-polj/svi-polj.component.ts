import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servisi/admin.service';
import { Router } from '@angular/router';
import { Farmer } from 'src/app/polj.module';

@Component({
  selector: 'app-svi-polj',
  templateUrl: './svi-polj.component.html',
  styleUrls: ['./svi-polj.component.css']
})
export class SviPoljComponent implements OnInit {

  constructor(private router: Router, private servis: AdminService) { }

  ngOnInit(): void {
    this.Farmeri();
  }

farmeri: Array<Farmer>;

Farmeri(){
  this.servis.sviFarmeri().subscribe((data: Array<Farmer>) => {
    this.farmeri = data;
  });
}
obrisi(username) {
  this.servis.odbijPolj(username).subscribe((poruka: string) => {
    if(poruka == 'ok') {
          location.reload();
    }

  });
}
}
