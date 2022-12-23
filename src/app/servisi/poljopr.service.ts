import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoljoprService {

  uri = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  logovanje(username, password, type) {
    const data = {
      username: username,
      password: password,
      type: type
    }

    return this.http.post(`${this.uri}/loginPolj`, data);

  }

  
  jedinstvenUsername(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/okUsernamePolj`, data);
  }


  register(name, lastname, username, password, dateOfBirth, cityOfBirth, phone, mail) {
    const data = {
      name: name,
      lastname: lastname,
      username: username,
      password: password,
      mail: mail,
      type: 'farmer',
      dateOfBirth: dateOfBirth,
      cityOfBirth: cityOfBirth,
      phone: phone,
      approved: false
    }

    return this.http.post(`${this.uri}/registerPolj`, data);
  }


  okSifra(username, password) {
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}/okPassPolj`, data);
  }

  promenaSifre(username,password) {
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}/changePassPolj`, data);
  }

   sviRasadnici(username){
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/sviRasadnici`, data);
   }

   dodajRasadnik(username, name, place, brSadnica, heigth, width){
    const data = {
      owner: username,
      name: name,
      place: place,
      sadn: "0",
      totalSadn: brSadnica,
      h20: "200",
      temp: "18",
      width: width,
      heigth: heigth
    }
    return this.http.post(`${this.uri}/dodajRasadnik`, data);
   }

   okImeRasadnika(username, name){
    const data = {
      username: username,
      name: name
    }
    return this.http.post(`${this.uri}/okImeRasadnika`, data);
   }

   sviProizvodi(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/sviProizvodi`, data);
  }

  
  sveNarudzbine(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/sveNarudzbine`, data);
  }

   
  brisanjeNarudzbine(kod) {
    const data = {
      kod: kod
    }
    return this.http.post(`${this.uri}/brisanjeNarudzbine`, data);
  }

  sveSadnice(){
    return this.http.get(`${this.uri}/sveSadnice`);
  }
  sviPreparati(){
    return this.http.get(`${this.uri}/sviPreparati`);
  }

  sviKomentari(kod){
    const data = {
      kod: kod
    }
    return this.http.post(`${this.uri}/sviKomentari`, data);
  }
  
  sveOcene(kod){
    const data = {
      kod: kod
    }
    return this.http.post(`${this.uri}/sveOcene`, data);
  }

  imaOcena(kod, username){
    const data = {
      kod: kod,
      username: username
    }
    return this.http.post(`${this.uri}/imaOcena`, data);
  }

  imaKom(kod, username){
    const data = {
      kod: kod,
      username: username
    }
    return this.http.post(`${this.uri}/imaKom`, data);
  }

  dodajKoment(codePr, user, comment){
    const data = {
      codePr: codePr,
      user: user,
      comment: comment
    }
    return this.http.post(`${this.uri}/dodajKom`, data);
  }

  dodajOc(codePr, user, rate){
    const data = {
      codePr: codePr,
      user: user,
      rate: rate
    }
    return this.http.post(`${this.uri}/dodajOcenu`, data);
  }

  sviKupljeni(kod) {
    const data = {
      kod: kod
    }
    return this.http.post(`${this.uri}/sviKupljeni`, data);
  }

  kupiPr(codeOfProd, name, company, amount,  type, owner, garden) {
    const data = {
      codeOfProd: codeOfProd,
      name: name,
      company: company,
      amount: amount,
      type: type,
      arrived: false,
      owner: owner,
      garden: garden,
      buy: new Date(),
    }
    return this.http.post(`${this.uri}/kupiPr`, data);
  }

  umanjiKol(kod, kol){
    const data = {
      kod: kod,
      kol: kol
    }
    return this.http.post(`${this.uri}/umanjiKol`, data);
  }

  dohvatiKol(kod){
    const data = {
      kod: kod
    }
    return this.http.post(`${this.uri}/dohvatiKol`, data);
  }

  dohvatiOcenu(kod){
    const data = {
      kod: kod
    }
    return this.http.post(`${this.uri}/dajOcenu`, data);
  }

  
  dohvatiRasadnik(name){
    const data = {
      name: name
    }
    return this.http.post(`${this.uri}/dohvatiRasadnik`, data);
  }

  updatejtujT(temp, name){
    const data = {
      temp: temp,
      name: name
    }
    return this.http.post(`${this.uri}/updatejtujT`, data);
  }

  updatejtujV(voda, name){
    const data = {
      voda: voda,
      name: name
    }
    return this.http.post(`${this.uri}/updatejtujV`, data);
  }

  sveZasadjene(username, name){
    const data = {
      username: username,
      name: name
    }
    return this.http.post(`${this.uri}/sveZasadjene`, data);
  }

  sadnica(username, name, w, h){
    const data = {
      username: username,
      name: name,
      w: w,
      h: h
    }
    return this.http.post(`${this.uri}/sadnica`, data);
  }

  preparatiRasadnika(owner, garden){
    const data = {
      owner: owner,
      garden: garden
    }
    return this.http.post(`${this.uri}/preparatiRasadnika`, data);
  }

  preparatNapredak(name, sadnica, garden, w , h){
    const data = {
      name: name,
      sadnica: sadnica,
      garden: garden,
      w: w,
      h: h
    }
    return this.http.post(`${this.uri}/preparatNapredak`, data);
  }


  
  preparatiDodaj(name, sadnica, garden, napredak,  w , h){
    const data = {
      name: name,
      sadnica: sadnica,
      garden: garden,
      napredak: napredak,
      w: w,
      h: h
    }
    return this.http.post(`${this.uri}/preparatiDodaj`, data);
  }


  izvadiSadnicu(username,garden, w , h, sadnica){
    const data = {
      username: username,
      sadnica: sadnica,
      garden: garden,
      w: w,
      h: h
    }
    return this.http.post(`${this.uri}/izvadiSadnicu`, data);
  }

  zasadi(naziv, username,garden, w , h, sadnica){
    const data = {
      name: naziv,
      username: username,
      sadnica: sadnica,
      garden: garden,
      napredak: "0",
      w: w,
      h: h,
      spremna: false
    }
    return this.http.post(`${this.uri}/zasadi`, data);
  }

  sadniceRasadnika(username, garden){
    const data = {
      username: username,
      garden: garden
    }
    return this.http.post(`${this.uri}/sadniceRasadnika`, data);

  }

  smanjiKolicinu(username, garden, kod, kol){
    const data = {
      username: username,
      garden: garden,
      kod: kod,
      kol: kol
    }
    return this.http.post(`${this.uri}/smanjiKolicinu`, data);

  }

  mozeDaZasadi(w, h, kod){
    const data = {
      w: w,
      h: h,
      kod: kod,
    }
    return this.http.post(`${this.uri}/mozeDaZasadi`, data);

  }

  porukaPrikaz(username){
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/porukaPrikaz`, data)
  }

  azurirajRasadnik(username, name){
    const data = {
      username: username,
      name: name
    }

    return this.http.post(`${this.uri}/azurirajRasadnik`, data)
  }


  imaPrUMagacinu(kod){
    const data = {
      kod: kod
    }

    return this.http.post(`${this.uri}/imaPrUMagacinu`, data)
  }


}
