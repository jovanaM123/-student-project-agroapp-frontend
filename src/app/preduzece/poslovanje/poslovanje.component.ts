import { Component, OnInit } from '@angular/core';
import { Magacin } from 'src/app/magacin.module';
import { Router, Data } from '@angular/router';
import { PreduzeceService } from 'src/app/servisi/preduzece.service';
import { Firm } from 'src/app/pred.module';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-poslovanje',
  templateUrl: './poslovanje.component.html',
  styleUrls: ['./poslovanje.component.css']
})
export class PoslovanjeComponent implements OnInit {

  constructor(private router: Router, private servis: PreduzeceService) { }

  ngOnInit(): void {
      this.dohvatiNarudzbine();

  }
  chart: any = [];


  dohvatiNarudzbine(){
    let username = localStorage.getItem('logged');
    this.servis.nazivFirme(username).subscribe((firma: Firm)=> {
      this.servis.sveNarudzbineIkad(firma[0].name).subscribe((data: Array<Magacin>)=> {
         let sveNar: Array<Magacin> = data;

         let sad = new Date();
         let pre = new Date();
         pre.setMonth(pre.getMonth() - 1);

          let niz = new Array();

          //sve narudzbine u mesec dana 

          for(let i=0; i < Object.keys(sveNar).length; i++) {
            let d = sveNar[i].buy;
            let datum = new Date(d);

            if (datum.getTime() <= sad.getTime() && 
            datum.getTime() >= pre.getTime()) {
                niz.push(sveNar[i]);

            }
          }

          //niz datuma poslednjih mesec dana
          var nizDatuma = new Array();
          var trDatum = pre;
          while (trDatum <= sad) {
              nizDatuma.push(new Date (trDatum));
              trDatum.setDate(trDatum.getDate() + 1);
          }
        
        let podaci = new Array();

          //sada za datume ispitati
          nizDatuma.forEach(dat => {           
            let vr = 0;
            for(let i=0; i < Object.keys(sveNar).length; i++) {
              let d = sveNar[i].buy;
              let datum = new Date(d);
              if(datum.getDate() == dat.getDate() && datum.getMonth() == dat.getMonth()){
                vr++;
              }
            }
            podaci.push(vr);
          });
         
          

          //formatiranje datuma
          let formatiraniDatumi = new Array();
          nizDatuma.forEach(dat => {
            dat = dat.toLocaleDateString()
            formatiraniDatumi.push(dat)
          })
          

          this.chart = new Chart('canvas', {
            type: 'bar',
            data: {
              labels: formatiraniDatumi,
              datasets: [
                {
                  label: "Poslovanje",
                  backgroundColor: "#3e95cd",
                  data: podaci
                }
              ]
            }
            });

      });
    })

  }

}
