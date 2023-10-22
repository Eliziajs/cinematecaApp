import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/domain/Filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filme-visualiza',
  templateUrl: './filme-visualiza.component.html',
  styleUrls: ['./filme-visualiza.component.css']
})
export class FilmeVisualizaComponent {

  @Input() filme! : Filme;
  
 //filme!: Filme;
  //diretor!: Diretor;
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
   
   /** this.service
    . getFilmeById(this.id)
    .subscribe(resposta => this.id = resposta)
    
  }pegarFilmeId(filme: Filme){
    this.filmeSelecionado = filme;
  }
  
  
  filmeSelecionaVisualizaFilme(filme: Filme){
    this.filmeSelecionado = filme;
  }**/
     
}
voltarParaLista(){
  this.router.navigate(['/filme-lista'])
 }
}
 
  
