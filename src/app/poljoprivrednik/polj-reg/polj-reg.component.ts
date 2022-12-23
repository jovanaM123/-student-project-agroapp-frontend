import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Farmer } from 'src/app/polj.module';

@Component({
  selector: 'app-polj-reg',
  templateUrl: './polj-reg.component.html',
  styleUrls: ['./polj-reg.component.css']
})
export class PoljRegComponent implements OnInit {

  constructor(private router: Router, private servis: PoljoprService) { }

  ngOnInit(): void {
  }


  public resolved(captchaResponse: string) {
      console.log(`Resolved captcha with response: ${captchaResponse}`);
      if(captchaResponse!=null){
        localStorage.setItem('capcthatoken', captchaResponse)
      }
    }


  name: String;
  lastname: String;
  username: String;
  password1: string;
  password2: String;
  dateOfBirth: Date;
  cityOfBirth: String;
  phone: String;
  mail: String;

  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})");  
  startRegex = new RegExp("^[a-zA-Z]");

  registracija() {
    if(localStorage.getItem('capcthatoken')!==null){
    if(this.strongRegex.test(this.password1) && this.startRegex.test(this.password1)) {
        if(this.password1 !== this.password2){
          alert('Šifre moraju biti iste.');
        } else {
          this.servis.jedinstvenUsername(this.username).subscribe(
            (farmer: Farmer)=>{
            if(Object.keys(farmer).length === 0) {
              this.servis.register(this.name, this.lastname, this.username, this.password1, this.dateOfBirth,this.cityOfBirth,
                this.phone,this.mail).subscribe(
                  (farmer) => {
                    if(farmer['uspeh']=== 'ok'){
                      localStorage.removeItem('capcthatoken')
                      alert('Registracija je uspešno poslata i biće obrađena u najkraćem roku!')                                      
                      setTimeout(() => {
                        this.router.navigate(['/']);
                      }, 2000); 
                    } else {
                      alert('Greška!')
                    }
                });
            } else { alert('Ovo korisničko ime je već zauzeto.');}
          })
        }
    } else {
      alert('Šifra u neispravnom formatu.');
    }
  }
}

}