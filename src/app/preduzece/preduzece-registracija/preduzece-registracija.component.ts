import { Component, OnInit } from '@angular/core';
import { Firm } from 'src/app/pred.module';
import { Router } from '@angular/router';
import { PreduzeceService } from 'src/app/servisi/preduzece.service';

@Component({
  selector: 'app-preduzece-registracija',
  templateUrl: './preduzece-registracija.component.html',
  styleUrls: ['./preduzece-registracija.component.css']
})
export class PreduzeceRegistracijaComponent implements OnInit {

  constructor(private router: Router, private servis: PreduzeceService) { }

  ngOnInit(): void {
  }

  

  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse!=null){
      localStorage.setItem('capcthatoken', captchaResponse)
    }
  }


name: String;
username: String;
password1: string;
password2: String;
date: Date;
city: String;
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
          (firm: Firm)=>{
          if(Object.keys(firm).length === 0) {
            this.servis.register(this.name, this.username, this.password1, this.date,this.city,
             this.mail).subscribe(
                (firm) => {
                  if(firm['uspeh']=== 'ok'){
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
