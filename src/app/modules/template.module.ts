import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../template/navbar/navbar.component';
import { SidebarComponent } from '../template/sidebar/sidebar.component';
import { FooterComponent } from '../template/footer/footer.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
  
  ],
  imports: [
    CommonModule, 
    RouterModule
], 
exports: [
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  
]
})
export class TemplateModule { }
