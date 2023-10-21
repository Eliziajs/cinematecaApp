import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/filme.service';
import { Filme } from '../filme';

@Component({
  selector: 'app-filme-visualiza',
  templateUrl: './filme-visualiza.component.html',
  styleUrls: ['./filme-visualiza.component.css']
})
export class FilmeVisualizaComponent implements OnInit{

    filme: Filme | undefined;
    id!: any;
    

    constructor(
      private service: FilmeService,
      private router: Router,
      private activatedRoute: ActivatedRoute)
      { }

      ngOnInit(): void {
        const routeParams = this.activatedRoute.snapshot.paramMap;
        const filmeIdFromRoute = Number(routeParams.get('id'));
        this.service.getFilmeById(filmeIdFromRoute)
        .subscribe({
          next: response=>this.filme,
          error:error=>this.filme = new Filme()
      } )
    }
      

  
  voltarParaLista(){
   this.router.navigate(['/filme-lista'])
  }

 pegarItem(){
    this.service.findById1();
    
 }
}

