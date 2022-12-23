import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  uri = "http://localhost:4000";


  constructor(private http: HttpClient) { }

  logovanje(username, password, type) {
    const data = {
      username: username,
      password: password,
      type: type
    }

    return this.http.post(`${this.uri}/loginAdm`, data);

  }

  zahteviFarmeri(){
    return this.http.get(`${this.uri}/zahtevFarmer`);
  }

  zahteviFirme(){
    return this.http.get(`${this.uri}/zahtevFirme`);
  }
  
  sviFarmeri(){
    return this.http.get(`${this.uri}/sviFarmeri`);
  }

  sviFirme(){
    return this.http.get(`${this.uri}/sveFirme`);
  }

  prihvatiPolj(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/prihvPolj`, data);

  }

  odbijPolj(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/odbijPolj`, data);

  }

  prihvatiFirmu(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/prihvPred`, data);

  }

  odbijFirmu(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/odbijPred`, data);

  }

  okSifra(username, password) {
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}/okPassAdm`, data);
  }

  promenaSifre(username,password) {
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}/changePassAdm`, data);
  }

  dohvatiPolj(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/dohvatiPolj`, data);

  }

  dohvatiPred(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/dohvatiPred`, data);

  }

  
  azPolj(userOld,name, lastname, username, dateOfBirth, cityOfBirth, phone, mail) {
    const data = {
      name: name,
      lastname: lastname,
      username: username,
      mail: mail,
      dateOfBirth: dateOfBirth,
      cityOfBirth: cityOfBirth,
      phone: phone,
      userOld: userOld
    }

    return this.http.post(`${this.uri}/azPolj`, data);
  }

  azPred(userOld,name, username, date, city, mail) {
    const data = {
      name: name,
      username: username,
      mail: mail,
      date: date,
      city: city,
      userOld: userOld
    }

    return this.http.post(`${this.uri}/azPred`, data);
  }




}
