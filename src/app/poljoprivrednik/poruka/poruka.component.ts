import { Component, OnInit } from '@angular/core';
import { PoljoprService } from 'src/app/servisi/poljopr.service';
import { Garden } from 'src/app/rasadnik.module';

@Component({
  selector: 'app-poruka',
  templateUrl: './poruka.component.html',
  styleUrls: ['./poruka.component.css']
})
export class PorukaComponent implements OnInit {

  constructor(private servis: PoljoprService) { }

  ngOnInit(): void {
    this.poruka();
  }

  name: Array<String>;

  poruka(){
    let username = localStorage.getItem('logged');

    this.servis.porukaPrikaz(username).subscribe((data: Array<Garden>)=> {
      let niz = new Array();
      for(let i=0; i < Object.keys(data).length; i++){
          if((+data[i].temp) < 12 || (+data[i].h20) < 120){
              niz.push(data[i].name);
              this.name = niz;
          }
      }
    })

  }

}
