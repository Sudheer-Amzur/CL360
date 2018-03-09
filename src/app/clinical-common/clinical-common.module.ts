import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 

import { ClinicalCommonRoutingModule } from './clinical-common-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ClinicalPrimeModule} from '../clinical-prime/clinical-prime.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
 
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ClinicalCommonRoutingModule,
    ClinicalPrimeModule
    
  ],
  exports:[DashboardComponent,LoginComponent],
  declarations: [HeaderComponent, FooterComponent, LeftMenuComponent, DashboardComponent, LoginComponent],
  providers:[LoginService]
})
export class ClinicalCommonModule { }
