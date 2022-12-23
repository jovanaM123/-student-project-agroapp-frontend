import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Garden } from 'src/app/rasadnik.module';

@Component({
  selector: 'app-polj-pocetna',
  templateUrl: './polj-pocetna.component.html',
  styleUrls: ['./polj-pocetna.component.css']
})
export class PoljPocetnaComponent implements OnInit {

  constructor(private router: Router, private servis: PoljoprService) { }

  ngOnInit(): void {
    this.dohvRasadnike();
  }

  rasadnici: Array<Garden>;

  dohvRasadnike(){
    let username = localStorage.getItem('logged');

    this.servis.sviRasadnici(username).subscribe((rasadnik: Array<Garden>) => {
      this.rasadnici = rasadnik;
    });
  }

}
