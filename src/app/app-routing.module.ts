import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmeModule } from './filme/filme.module';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  //{ path: 'filme-module', component: FilmeModule}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
