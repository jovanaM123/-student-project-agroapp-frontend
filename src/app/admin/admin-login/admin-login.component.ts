import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/servisi/admin.service';
import { Admin } from 'src/app/admin.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router, private servis: AdminService) { }

  ngOnInit(): void {
  }

  username: String;
  password: String;
  message: String;

  login() {
    this.servis.logovanje(this.username, this.password, 'admin').subscribe((admin: Admin) => {
      if(admin[0]!=undefined){
        localStorage.setItem("logged", admin[0].username);
        localStorage.setItem("tip", "admin");
        this.router.navigate(['/adminPocetna']);
      }else {
              this.message="Molimo Vas unesite dobre kredencijale!";
      }
    })
  }

}
