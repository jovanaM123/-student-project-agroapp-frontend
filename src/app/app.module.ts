import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { GlavnaComponent } from './glavna/glavna.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ZahteviPoljComponent } from './admin/zahtevi-polj/zahtevi-polj.component';
import { ZahteviFirmeComponent } from './admin/zahtevi-firme/zahtevi-firme.component';
import { SviPoljComponent } from './admin/svi-polj/svi-polj.component';
import { SveFirmeComponent } from './admin/sve-firme/sve-firme.component';
import { AdminPocetnaComponent } from './admin/admin-pocetna/admin-pocetna.component';
import { PoljLoginComponent } from './poljoprivrednik/polj-login/polj-login.component';
import { PoljPocetnaComponent } from './poljoprivrednik/polj-pocetna/polj-pocetna.component';
import { PoljRegComponent } from './poljoprivrednik/polj-reg/polj-reg.component';
import { PreduzeceLoginComponent } from './preduzece/preduzece-login/preduzece-login.component';
import { PreduzeceRegistracijaComponent } from './preduzece/preduzece-registracija/preduzece-registracija.component';
import { PreduzecePocetnaComponent } from './preduzece/preduzece-pocetna/preduzece-pocetna.component';
import { HttpClientModule} from '@angular/common/http';
import { AdminService } from './servisi/admin.service';
import { PoljoprService } from './servisi/poljopr.service';
import { PreduzeceService } from './servisi/preduzece.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { AdminMeniComponent } from './meniji/admin-meni/admin-meni.component';
import { PredMeniComponent } from './meniji/pred-meni/pred-meni.component';
import { PoljMeniComponent } from './meniji/polj-meni/polj-meni.component';
import { PromenaSifreComponent } from './promena-sifre/promena-sifre.component'
import { AzPoljComponent } from './admin/az-polj/az-polj.component';
import { AzPredComponent } from './admin/az-pred/az-pred.component';
import { DodavanjeRasadnikaComponent } from './poljoprivrednik/dodavanje-rasadnika/dodavanje-rasadnika.component';
import { MagacinComponent } from './poljoprivrednik/magacin/magacin.component';
import { NarudzbineComponent } from './poljoprivrednik/narudzbine/narudzbine.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SadniceComponent } from './poljoprivrednik/sadnice/sadnice.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { PoslovanjeComponent } from './preduzece/poslovanje/poslovanje.component';
import { SviProizvodiComponent } from './preduzece/svi-proizvodi/svi-proizvodi.component';
import { DetaljiProizComponent } from './preduzece/detalji-proiz/detalji-proiz.component';
import { DodajProizComponent } from './preduzece/dodaj-proiz/dodaj-proiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { KorpaComponent } from './poljoprivrednik/korpa/korpa.component';
import { DetaljiComponent } from './poljoprivrednik/detalji/detalji.component';
import { KuririComponent } from './preduzece/kuriri/kuriri.component';
import { DashboardComponent } from './poljoprivrednik/dashboard/dashboard.component';
import { PreparatiComponent } from './poljoprivrednik/preparati/preparati.component';
import { SadjenjeComponent } from './poljoprivrednik/sadjenje/sadjenje.component';
import { PorukaComponent } from './poljoprivrednik/poruka/poruka.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    GlavnaComponent,
    AdminLoginComponent,
    AdminPocetnaComponent,
    PoljLoginComponent,
    PoljPocetnaComponent,
    PoljRegComponent,
    PreduzeceLoginComponent,
    PreduzeceRegistracijaComponent,
    PreduzecePocetnaComponent,
    AdminMeniComponent,
    PoljMeniComponent,
    PredMeniComponent,
    ZahteviPoljComponent,
    ZahteviFirmeComponent,
    SviPoljComponent,
    SveFirmeComponent,
    PromenaSifreComponent,
    AzPoljComponent,
    AzPredComponent,
    DodavanjeRasadnikaComponent,
    MagacinComponent,
    NarudzbineComponent,
    SadniceComponent,
    PoslovanjeComponent,
    SviProizvodiComponent,
    DetaljiProizComponent,
    DodajProizComponent,
    KorpaComponent,
    DetaljiComponent,
    KuririComponent,
    DashboardComponent,
    PreparatiComponent,
    SadjenjeComponent,
    PorukaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    RecaptchaModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule
  ],
  providers: [AdminService, PoljoprService, PreduzeceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
