import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Genero } from 'src/app/domain/Genero';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
  genero!: Genero;
  success: boolean = false;
  error?: string[];
  id?: any;

  constructor(
    private generoService : GeneroService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
 ){
  this.genero = new Genero();
 }

 ngOnInit(): void {
  let param : Observable<Params> = this.activatedRoute.params
  param.subscribe( urlParams => {
    this.id = urlParams['id'];
    if(this.id){
    this.generoService
    .getGeneroById(this.id)
    .subscribe(
      response => this.genero =response, 
      errorResponse =>this.genero = new Genero()
    )
    }
  })

}

OnSubmit(){
  if(this.id){
  this.generoService.atualizarGenero(this.genero)
  .subscribe({
      next: response=>this.success = true,
      error:erro=>this.error = erro.error
  })
}else{
    this.generoService
    .salvarGenero(this.genero)
    .subscribe({
      next: response=>this.success = true,
      error:erro=>this.error = erro.error
    })
}
}

}


