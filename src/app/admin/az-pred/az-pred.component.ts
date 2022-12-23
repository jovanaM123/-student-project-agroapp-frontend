import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servisi/admin.service';
import { Firm } from 'src/app/pred.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-az-pred',
  templateUrl: './az-pred.component.html',
  styleUrls: ['./az-pred.component.css']
})
export class AzPredComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private servis: AdminService) { }

  ngOnInit(): void {
    this.usernameR = this.route.snapshot.paramMap.get("username");
    this.getFirm();
  }

  
  usernameR: String;
  firm: Firm;

  name: String;
  username: String;
  date: Date;
  city: String;
  mail: String;

  getFirm(){
    this.servis.dohvatiPred(this.usernameR).subscribe((f: Firm) => {
      this.firm = f[0];
    })
  }

  promena() {
    let datum = new Date();

    let fname = (typeof(this.firm.name) == "undefined")? "" : this.firm.name;
    let fdatum = (typeof(this.firm.date) == "undefined")?datum:this.firm.date;
    let fcity = (typeof(this.firm.city)=="undefined")?"":this.firm.city;
    let fmail = (typeof(this.firm.mail)=="undefined")?"":this.firm.mail;


    let name = (typeof(this.name) == "undefined") ?  fname : this.name;
    let username = (typeof(this.username) == "undefined") ? this.usernameR : this.username;
    let date = (typeof(this.date) == "undefined") ? fdatum : this.date;
    let city = (typeof(this.city) == "undefined") ? fcity : this.city;
    let mail = (typeof(this.mail) == "undefined") ? fmail : this.mail;

  
    this.servis.azPred(this.usernameR, name, username, date,
      city, mail).subscribe((message:string)=>{
        if(message==="ok") {
          this.router.navigate(['/svaPred']);
        }
      });  }

}
