import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreduzeceService {

  uri = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  logovanje(username, password, type) {
    const data = {
      username: username,
      password: password,
      type: type
    }

    return this.http.post(`${this.uri}/loginPred`, data);

  }


  jedinstvenUsername(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/okUsernamePred`, data);
  }


  register(name, username, password, date, city, mail) {
    const data = {
      name: name,
      username: username,
      password: password,
      mail: mail,
      type: 'company',
      date: date,
      city: city,
      approved: false
    }

    return this.http.post(`${this.uri}/registerPred`, data);
  }

  okSifra(username, password) {
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}/okPassPred`, data);
  }

  promenaSifre(username,password) {
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}/changePassPred`, data);
  }

  sveNarudzbine(firma){
    const data = {
      firma: firma
    }
    return this.http.post(`${this.uri}/sveNar`, data);
  }
  sveNarudzbineIkad(firma){
    const data = {
      firma: firma
    }
    return this.http.post(`${this.uri}/sveNarudzbineIkad`, data);
  }

  nazivFirme(username){
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/nazivFirme`, data);
  }

  sviProizvodi(firma){
    const data = {
      firma: firma
    }
    return this.http.post(`${this.uri}/sviPrFirme`, data);
  }

  
  sveSadnice(firma){
    const data = {
      firma: firma
    }
    return this.http.post(`${this.uri}/sveFirmineSadnice`, data);
  }

  obrisiProizvod(codePr){
    const data = {
      codePr: codePr
    }
    return this.http.post(`${this.uri}/obrisiPrFirme`, data);
  }

  dodajProizvod(codePr, name, owner, type, amount , avRate, price, description, neSmePored){
    const data = {
      codePr: codePr,
      name: name,
      owner: owner,
      type: type,
      amount:amount,
      avRate:avRate,
      price:price,
      description:description,
      neSmePored: neSmePored,
    }
    return this.http.post(`${this.uri}/dodajProizvod`, data);
  }

  sviZauzeti(){
    //ako nema da ima true u bazi
  }

  sviKomentari(kod){
    const data = {
      kod: kod
    }
    return this.http.post(`${this.uri}/sviKomentari`, data);
  }

  dajOcenu(kod){
    const data = {
      kod: kod
    }
    return this.http.post(`${this.uri}/dajOcenu`, data);
  }

  okKod(kod){
    const data = {
      kod: kod
    }
    return this.http.post(`${this.uri}/okKod`, data);
  }

  obrisiNarudzbinu(kod, amount, owner){
    const data = {
      kod: kod,
      amount: amount,
      owner: owner
    }
    return this.http.post(`${this.uri}/obrisiNarudzbinu`, data);
  }

  nisuSlobodni(){
    return this.http.get(`${this.uri}/nisuSlobodni`);
  }

  umanjiKolProdukta(kod, amount){
    const data = {
      kod: kod,
      amount: amount
    }
    return this.http.post(`${this.uri}/umanjiKolProdukta`, data);

  }

  dodajUMagacin(kod, garden, username){
    const data = {
      kod: kod,
      garden: garden,
      username: username
    }
    return this.http.post(`${this.uri}/dodajUMagacin`, data);

  }

  grad(name, owner){
    const data = {
      name: name,
      owner: owner
    }
    return this.http.post(`${this.uri}/grad`, data);

  }


  zauzmiKurira(name, datum){
    const data = {
      name: name,
      datum: datum
    }

    return this.http.post(`${this.uri}/zauzmiKurira`, data);
  }

}
