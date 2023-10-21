import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from '../routings/user-routing.module';
import { UserFormComponent } from '../components/user-form/user-form.component';


@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ], 
  exports:[
    UserFormComponent
  ] //para ser visualizado em outras telas
})
export class UserModule { }
