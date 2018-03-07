import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   
  AccordionModule,
  AutoCompleteModule,
  ButtonModule,
  BreadcrumbModule,
  CalendarModule,
  CheckboxModule,
  DialogModule,
  DataTableModule,
  DropdownModule,
  FileUploadModule,
  InputTextModule,
  InputTextareaModule, 
  MegaMenuModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelModule,
  PanelMenuModule,
  RadioButtonModule,
  SharedModule,
  SlideMenuModule, 
  
} from 'primeng/primeng';

@NgModule({
  imports: [CommonModule],
  exports:[AccordionModule,
    AutoCompleteModule,
    ButtonModule,
    BreadcrumbModule,
    CalendarModule,
    CheckboxModule,
    DialogModule,
    DataTableModule,
    DropdownModule,
    FileUploadModule,
    InputTextModule,
    InputTextareaModule, 
    MegaMenuModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    RadioButtonModule,
    SharedModule,
    SlideMenuModule
  ],
  declarations: []
})
export class ClinicalPrimeModule { }
