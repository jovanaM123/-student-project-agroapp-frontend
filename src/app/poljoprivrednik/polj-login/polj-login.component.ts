import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Farmer } from 'src/app/polj.module';

@Component({
  selector: 'app-polj-login',
  templateUrl: './polj-login.component.html',
  styleUrls: ['./polj-login.component.css']
})
export class PoljLoginComponent implements OnInit {

  constructor(private router: Router, private servis: PoljoprService) { }

  ngOnInit(): void {
  }

  username: String;
  password: String;
  message: String;


  login() {
    this.servis.logovanje(this.username, this.password, 'farmer').subscribe((polj: Farmer) => {
      if(polj[0]!=undefined){
        localStorage.setItem("logged", polj[0].username);
        localStorage.setItem("tip", "farmer");
        this.router.navigate(['/poljPocetna']);
      }else {
        this.message="Molimo Vas unesite dobre kredencijale!";
      }
    })
  }
}
