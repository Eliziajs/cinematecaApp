import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Diretor } from 'src/app/domain/Diretor';
import { DiretorService } from 'src/app/services/diretor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent implements OnInit{

  diretor!: Diretor;
  success: boolean = false;
  error?: string[];
  id: any;

  constructor(
    private diretorService : DiretorService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
 ){
  this.diretor = new Diretor();
 }

 ngOnInit(): void {
  let param : Observable<Params> = this.activatedRoute.params
  param.subscribe( urlParams => {
    this.id = urlParams['id'];
    if(this.id){
    this.diretorService
    .getDiretorById(this.id)
    .subscribe(
      response => this.diretor =response, 
      errorResponse =>this.diretor = new Diretor()
    )
    }
  })
   
}

OnSubmit(){
  if(this.id){
  this.diretorService.atualizarDiretor(this.diretor)
  .subscribe({
      next: response=>this.success = true,
      error:erro=>this.error = erro.error
  })
}else{
    this.diretorService
    .salvarDiretor(this.diretor)
    .subscribe({
      next: response=>this.success = true,
      error:erro=>this.error = erro.error
    })
}
}
voltarParaLista(){
  this.router.navigate(['/filme-lista'])
 }
}


