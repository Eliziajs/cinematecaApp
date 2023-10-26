
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { HomeFerramentaComponent } from './components/home-ferramenta/home-ferramenta.component';


const routes: Routes = [

    { path : 'home', component: HomeComponent },
    { path: 'home-ferramenta', component: HomeFerramentaComponent },
    { path: '' , redirectTo: '/home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
