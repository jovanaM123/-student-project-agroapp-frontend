import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from 'src/app/polj.module';
import { Firm } from 'src/app/pred.module';
import { AdminService } from 'src/app/servisi/admin.service';

@Component({
  selector: 'app-admin-pocetna',
  templateUrl: './admin-pocetna.component.html',
  styleUrls: ['./admin-pocetna.component.css']
})
export class AdminPocetnaComponent implements OnInit {

  constructor(private router: Router, private servis: AdminService) { }

  ngOnInit(): void {

  }
  


}
