import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmeRoutingModule } from './filme-routing.module';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import { FilmeListaComponent } from './filme-lista/filme-lista.component';
import { FilmeVisualizaComponent } from './filme-visualiza/filme-visualiza.component';




@NgModule({
  declarations: [
    FilmeFormComponent,
    FilmeListaComponent,
    FilmeVisualizaComponent
  
 
  ],
  imports: [
    CommonModule,
    FilmeRoutingModule,
    FormsModule
  ],
  exports: [
    FilmeFormComponent,
    FilmeListaComponent,
    FilmeVisualizaComponent
   
   
  ] 
})
export class FilmeModule { }
