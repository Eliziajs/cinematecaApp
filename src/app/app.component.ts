import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Filme } from './domain/Filme';
import { Diretor } from './domain/Diretor';
import { Genero } from './domain/Genero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cinematecaApp';

  filme!: Filme;
  diretor!: Diretor;
  genero!: Genero;

  
  ngOnInit(){

  }
  AfterViewInit(){
    window.addEventListener('DOMContentLoaded', event => {

      // Toggle the side navigation
      const sidebarToggle = document.body.querySelector('#sidebarToggle');
      if (sidebarToggle) {
          // Uncomment Below to persist sidebar toggle between refreshes
          // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          //     document.body.classList.toggle('sb-sidenav-toggled');
          // }
          sidebarToggle.addEventListener('click', event => {
              event.preventDefault();
              document.body.classList.toggle('sb-sidenav-toggled');
              //localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
              //verificar retorno booleano?
          });
      }
  
  });

  }

}
