import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClinicalCommonModule} from './clinical-common/clinical-common.module';
import {ClinicalPrimeModule} from './clinical-prime/clinical-prime.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClinicalCommonModule,
    ClinicalPrimeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
