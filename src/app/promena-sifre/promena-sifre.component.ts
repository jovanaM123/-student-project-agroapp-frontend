import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoljoprService } from '../servisi/poljopr.service';
import { AdminService } from '../servisi/admin.service';
import { PreduzeceService } from '../servisi/preduzece.service';
import { Admin } from '../admin.model';
import { Farmer } from '../polj.module';
import { Firm } from '../pred.module';

@Component({
  selector: 'app-promena-sifre',
  templateUrl: './promena-sifre.component.html',
  styleUrls: ['./promena-sifre.component.css']
})
export class PromenaSifreComponent implements OnInit {

  constructor(private router: Router, private servisPolj: PoljoprService,
    private servisAdm: AdminService, private servisPred: PreduzeceService) { }

  ngOnInit(): void {
  }

  passwordold: string;
  password1: string;
  password2: string;

  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})");  
  startRegex = new RegExp("^[a-zA-Z]");


  promena(){
    let typeUser = localStorage.getItem("tip");
    let user = localStorage.getItem("logged");

    if(this.strongRegex.test(this.password1) && this.startRegex.test(this.password1)) {
          if(this.password1 !== this.password2){
            alert('Nove šifre moraju biti iste.');
          } else {
              switch(typeUser) { 
                case "admin": {
                  this.servisAdm.okSifra(user,this.passwordold).subscribe((admin: Admin)=> {
                    if(Object.keys(admin).length !== 0) {
                      this.servisAdm.promenaSifre(user, this.password1).subscribe((message: string)=> {
                        if(message === "ok") {
                          alert('Šifra je uspešno promenjena!')                                      
                          setTimeout(() => {
                            this.router.navigate(['/adminLogin']);
                          }, 1000); 
                        } else {
                          alert('Greška!')
                        }
                      });                   
                    } else {
                      alert('Niste uneli dobro staru šifru.');
                    }
                  }) 
                  
                  break; 
                } 
                case "farmer": { 
                  this.servisPolj.okSifra(user,this.passwordold).subscribe((farmer: Farmer)=> {
                    if(Object.keys(farmer).length !== 0) {
                      this.servisPolj.promenaSifre(user, this.password1).subscribe((message: string)=> {
                        if(message === "ok") {
                          alert('Šifra je uspešno promenjena!')                                      
                          setTimeout(() => {
                            this.router.navigate(['/poljLogin']);
                          }, 1000); 
                        } else {
                          alert('Greška!')
                        }
                      });                   
                    } else {
                      alert('Niste uneli dobro staru šifru.');
                    }
                  }) 
          
                  break; 
                } 
                case "company": { 
                  this.servisPred.okSifra(user,this.passwordold).subscribe((firm: Firm)=> {
                    if(Object.keys(firm).length !== 0) {
                      this.servisPred.promenaSifre(user, this.password1).subscribe((message: string)=> {
                        if(message === "ok") {
                          alert('Šifra je uspešno promenjena!')                                      
                          setTimeout(() => {
                            this.router.navigate(['/predLogin']);
                          }, 1000); 
                        } else {
                          alert('Greška!')
                        }
                      });                   
                    } else {
                      alert('Niste uneli dobro staru šifru.');
                    }
                  }) 

                  break; 
              } 
            } 
          }
     } else {
        alert('Nove šifre su u neispravnom formatu.');
      }

    }
}
