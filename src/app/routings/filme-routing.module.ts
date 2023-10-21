import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeFormComponent } from '../components/filme-form/filme-form.component';
import { FilmeListaComponent } from '../components/filme-lista/filme-lista.component';
import { FilmeVisualizaComponent } from '../components/filme-visualiza/filme-visualiza.component';



const routes: Routes = [
  
  { path: 'filme-form', component: FilmeFormComponent },
  { path: 'filme-lista', component: FilmeListaComponent},
  { path: 'filme-lista/:id', component: FilmeListaComponent},
  { path: 'filme-visualiza', component: FilmeVisualizaComponent},
  { path: 'filme-visualiza/:id', component: FilmeVisualizaComponent},
  { path:'', redirectTo: '/filme/lista', pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmeRoutingModule { }
