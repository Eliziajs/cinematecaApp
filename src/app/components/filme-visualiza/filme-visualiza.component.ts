import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Filme } from 'src/app/domain/Filme';
import { FilmeService } from 'src/app/services/filme.service';
import { DiretorService } from 'src/app/services/diretor.service';
import { Observable } from 'rxjs';
import { Diretor } from 'src/app/domain/Diretor';

@Component({
  selector: 'app-filme-visualiza',
  templateUrl: './filme-visualiza.component.html',
  styleUrls: ['./filme-visualiza.component.css']
})
export class FilmeVisualizaComponent {

  @Input() filme! : Filme;
  
 //filme!: Filme;
  diretor!: Diretor;
  success: boolean =false;
  error?: string[];
  id: any;
  filmeSelecionado!: Filme;
  mensagemSucesso!: string;
  mensagemErro!: string; 


  constructor(
    private service: FilmeService, 
    //private diretorService : DiretorService,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    )
    {}

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

  pegarFilmeId(filme: Filme){
    this.filmeSelecionado = filme;
  }
  
  
  filmeSelecionaVisualizaFilme(filme: Filme){
    this.filmeSelecionado = filme;
  }
     

  voltarParaLista(){
  this.router.navigate(['/filme-lista'])
 }

}
