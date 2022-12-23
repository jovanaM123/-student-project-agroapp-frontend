import { Component, OnInit } from '@angular/core';
import { Firm } from 'src/app/pred.module';
import { Router } from '@angular/router';
import { PreduzeceService } from 'src/app/servisi/preduzece.service';

@Component({
  selector: 'app-preduzece-login',
  templateUrl: './preduzece-login.component.html',
  styleUrls: ['./preduzece-login.component.css']
})
export class PreduzeceLoginComponent implements OnInit {

  constructor(private router: Router, private servis: PreduzeceService) { }

  ngOnInit(): void {
  }

  username: String;
  password: String;
  message: String;


  
  login() {
    this.servis.logovanje(this.username, this.password, 'company').subscribe((firm: Firm) => {
      if(firm[0]!=undefined){
        localStorage.setItem("logged", firm[0].username);
        localStorage.setItem("tip", "farmer");
        this.router.navigate(['/predPocetna']);
      }else {
              this.message="Molimo Vas unesite dobre kredencijale!";
      }
    })
  }
}
