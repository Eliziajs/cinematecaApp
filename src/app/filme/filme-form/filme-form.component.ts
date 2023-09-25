import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { Filme } from '../filme';
import { FilmeService } from 'src/app/filme.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit{

  filme!: Filme;
  success: boolean =false;
  error?: string[];
  id: any;
  

  constructor(
    private service: FilmeService,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    )
    { 
    this.filme = new Filme();
  }

 
 ngOnInit(): void {
    let param : Observable<Params> = this.activatedRoute.params
    param.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
      this.service
      .getFilmeById(this.id)
      .subscribe(
        response => this.filme =response, 
        errorResponse =>this.filme = new Filme()
      )
      }
    })
     
 }
  OnSubmit(){
    if(this.id){
    this.service.atualizar(this.filme)
    .subscribe({
        next: response=>this.success = true,
        error:erro=>this.error = erro.error
    })
  }else{
      this.service
      .salvar(this.filme)
      .subscribe({
        next: response=>this.success = true,
        error:erro=>this.error = erro.error
      })
  }
}
  novoCadastroFilme(){
    this.router.navigate(['/filme-visualiza'])

  }
  voltarParaLista(){
    this.router.navigate(['/filme-lista'])
   }
}

/**OnSubmit(){
  this.service
    .salvar(this.filme)
    .subscribe(response => {
     this.success = true;
     console.log(response);
     this.filme = response;
  }, errorResponse => {
    this.error = errorResponse.error.error;
    //console.log(errorResponse.error.error)
  })
}**/