import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalCommonRoutingModule } from './clinical-common-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ClinicalCommonRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, LeftMenuComponent, DashboardComponent]
})
export class ClinicalCommonModule { }
