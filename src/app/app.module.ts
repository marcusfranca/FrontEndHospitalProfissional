import { ProfissionalModule } from './views/profissional-crud/profissional.module';
import { HospitalCrudModule } from './views/hospital-crud/hospital-crud.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RelacionamentoComponent } from './views/Relacionamanto-hospital-profissional/relacionamento/relacionamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RelacionamentoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule,
    HospitalCrudModule, // importando os modulo do  hospital onde vai tá os componentes lista, criar e etc.
    ProfissionalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
