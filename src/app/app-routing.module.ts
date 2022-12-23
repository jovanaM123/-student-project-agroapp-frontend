import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlavnaComponent } from './glavna/glavna.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPocetnaComponent } from './admin/admin-pocetna/admin-pocetna.component';
import { PoljLoginComponent } from './poljoprivrednik/polj-login/polj-login.component';
import { PoljPocetnaComponent } from './poljoprivrednik/polj-pocetna/polj-pocetna.component';
import { PoljRegComponent } from './poljoprivrednik/polj-reg/polj-reg.component';
import { PreduzeceRegistracijaComponent } from './preduzece/preduzece-registracija/preduzece-registracija.component';
import { PreduzeceLoginComponent } from './preduzece/preduzece-login/preduzece-login.component';
import { PreduzecePocetnaComponent } from './preduzece/preduzece-pocetna/preduzece-pocetna.component';
import { ZahteviPoljComponent } from './admin/zahtevi-polj/zahtevi-polj.component';
import { ZahteviFirmeComponent } from './admin/zahtevi-firme/zahtevi-firme.component';
import { SviPoljComponent } from './admin/svi-polj/svi-polj.component';
import { SveFirmeComponent } from './admin/sve-firme/sve-firme.component';
import { PromenaSifreComponent } from './promena-sifre/promena-sifre.component';
import { AzPoljComponent } from './admin/az-polj/az-polj.component';
import { AzPredComponent } from './admin/az-pred/az-pred.component';
import { DodavanjeRasadnikaComponent } from './poljoprivrednik/dodavanje-rasadnika/dodavanje-rasadnika.component';
import { MagacinComponent } from './poljoprivrednik/magacin/magacin.component';
import { NarudzbineComponent } from './poljoprivrednik/narudzbine/narudzbine.component';
import { SadniceComponent } from './poljoprivrednik/sadnice/sadnice.component';
import { PoslovanjeComponent } from './preduzece/poslovanje/poslovanje.component';
import { DodajProizComponent } from './preduzece/dodaj-proiz/dodaj-proiz.component';
import { DetaljiProizComponent } from './preduzece/detalji-proiz/detalji-proiz.component';
import { SviProizvodiComponent } from './preduzece/svi-proizvodi/svi-proizvodi.component';
import { KorpaComponent } from './poljoprivrednik/korpa/korpa.component';
import { DetaljiComponent } from './poljoprivrednik/detalji/detalji.component';
import { KuririComponent } from './preduzece/kuriri/kuriri.component';
import { DashboardComponent } from './poljoprivrednik/dashboard/dashboard.component';
import { PreparatiComponent } from './poljoprivrednik/preparati/preparati.component';
import { SadjenjeComponent } from './poljoprivrednik/sadjenje/sadjenje.component';


const routes: Routes = [
  {path: '', component: GlavnaComponent},
  {path: 'adminLogin', component: AdminLoginComponent},
  {path: 'adminPocetna', component: AdminPocetnaComponent},
  {path: 'poljLogin', component: PoljLoginComponent},
  {path: 'poljPocetna', component: PoljPocetnaComponent},
  {path: 'poljReg', component: PoljRegComponent},
  {path: 'predLogin', component: PreduzeceLoginComponent},
  {path: 'predPocetna', component: PreduzecePocetnaComponent},
  {path: 'predReg', component: PreduzeceRegistracijaComponent},
  {path: 'zahtevPolj', component: ZahteviPoljComponent},
  {path: 'zahtevPred', component: ZahteviFirmeComponent},
  {path: 'sviPolj', component: SviPoljComponent},
  {path: 'svaPred', component: SveFirmeComponent},
  {path: 'promenaSifre', component: PromenaSifreComponent},
  {path: 'azPolj/:username', component: AzPoljComponent},
  {path: 'azPred/:username', component: AzPredComponent},
  {path: 'dodajRasadnik', component: DodavanjeRasadnikaComponent},
  {path: 'magacin', component: MagacinComponent},
  {path: 'narudzbine', component: NarudzbineComponent},
  {path: 'sadnice', component: SadniceComponent},
  {path: 'poslovanje', component: PoslovanjeComponent},
  {path: 'dodajProizv', component: DodajProizComponent},
  {path: 'detalji/:codePr', component: DetaljiProizComponent},
  {path: 'sviProizv', component: SviProizvodiComponent},
  {path: 'korpa', component: KorpaComponent},
  {path: 'detaljiPr/:codePr', component: DetaljiComponent},
  {path: 'kuriri/:codePr/:garden/:username/:kolicina', component: KuririComponent},
  {path: 'dashb/:name', component: DashboardComponent},
  {path: 'preparati/:name/:w/:h', component: PreparatiComponent},
  {path: 'sadjenje/:name/:w/:h', component: SadjenjeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
