import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Farmer } from 'src/app/polj.module';
import { AdminService } from 'src/app/servisi/admin.service';

@Component({
  selector: 'app-az-polj',
  templateUrl: './az-polj.component.html',
  styleUrls: ['./az-polj.component.css']
})
export class AzPoljComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private servis: AdminService) { }

  ngOnInit(): void {
    this.usernameR = this.route.snapshot.paramMap.get("username");
    this.getFarmer();
  }

  usernameR: String;
  farmer: Farmer;

  name: String;
  lastname: String;
  username: String;
  dateOfBirth: Date;
  cityOfBirth: String;
  phone: String;
  mail: String;

  getFarmer(){
    this.servis.dohvatiPolj(this.usernameR).subscribe((f: Farmer) => {
      this.farmer = f[0];
    })
  }

  promena() {
    let datum = new Date();

    let fname = (typeof(this.farmer.name) == "undefined")? "" : this.farmer.name;
    let flastname = (typeof(this.farmer.lastname) =="undefined")?"":this.farmer.lastname;
    let fdatum = (typeof(this.farmer.dateOfBirth) == "undefined")?datum:this.farmer.dateOfBirth;
    let fcityOfBirth = (typeof(this.farmer.cityOfBirth)=="undefined")?"":this.farmer.cityOfBirth;
    let fphone = (typeof(this.farmer.phone)=="undefined")?"":this.farmer.phone;
    let fmail = (typeof(this.farmer.mail)=="undefined")?"":this.farmer.mail;


    let name = (typeof(this.name) == "undefined") ?  fname : this.name;
    let username = (typeof(this.username) == "undefined") ? this.usernameR : this.username;
    let lastname = (typeof(this.lastname) == "undefined") ? flastname: this.lastname;
    let dateOfBirth = (typeof(this.dateOfBirth) == "undefined") ? fdatum : this.dateOfBirth;
    let cityOfBirth = (typeof(this.cityOfBirth) == "undefined") ? fcityOfBirth : this.cityOfBirth;
    let phone = (typeof(this.phone) == "undefined") ? fphone : this.phone;
    let mail = (typeof(this.mail) == "undefined") ? fmail : this.mail;

    this.servis.azPolj(this.usernameR, name, lastname, username, dateOfBirth,
      cityOfBirth, phone, mail).subscribe((message:string)=>{
        if(message==="ok") {
          this.router.navigate(['/sviPolj']);
        }
      });  }
}
