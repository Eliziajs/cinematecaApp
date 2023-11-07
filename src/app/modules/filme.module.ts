import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilmeRoutingModule } from '../routings/filme-routing.module';
import { FilmeFormComponent } from '../components/filme-form/filme-form.component';
import { FilmeListaComponent } from '../components/filme-lista/filme-lista.component';
import { FilmeVisualizaComponent } from '../components/filme-visualiza/filme-visualiza.component';


@NgModule({
  declarations: [
    FilmeFormComponent,
    FilmeListaComponent,
    FilmeVisualizaComponent,
    
   
  ],
  imports: [
    CommonModule,
    FilmeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FilmeFormComponent,
    FilmeListaComponent,
    FilmeVisualizaComponent
   
  ] 
})
export class FilmeModule { }
