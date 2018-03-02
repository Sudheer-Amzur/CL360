import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ClinicalCommonModule} from './clinical-common/clinical-common.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClinicalCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
