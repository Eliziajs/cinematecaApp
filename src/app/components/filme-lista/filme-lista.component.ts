import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Filme } from '../../domain/Filme';
import { FilmeService } from '../../services/filme.service';
import { Diretor } from 'src/app/domain/Diretor';
import { DiretorService } from 'src/app/services/diretor.service';


@Component({
  selector: 'app-filme-lista',
  templateUrl: './filme-lista.component.html',
  styleUrls: ['./filme-lista.component.css']
})
export class FilmeListaComponent implements OnInit {

  filmes: Filme[] = [];
  diretores! : Diretor;
//@Input() diretor = Diretor!
  filmeSelecionado!: Filme;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(
    private service: FilmeService,
    private diretorService: DiretorService,
    private router: Router) {}

  ngOnInit(): void {
   
     let filme =this.service
      .getFilmes()
      .subscribe(resposta => this.filmes = resposta)
     
     
  }
 
  filmeSelecionaDelecao(filmes: Filme){
    this.filmeSelecionado = filmes;
  }
  diretoresSelecionadoPorId(diretores: Diretor){
    this.diretorService
    .getDiretorById(diretores.id)
    .subscribe(resposta => this.diretores = resposta)
    console.log(diretores)
   
  }
  deletarFilme(){
    this.service
   .deletar(this.filmeSelecionado)
    .subscribe(response => 
      this.mensagemSucesso = 'cliente deletado com sucesso!',
      erro=> 
      this.mensagemErro = 'Ocorreu um erro ao deletar')

  }
  irParaFilmeVisualiza(){
    this.router.navigate(['/filme-visualiza'])
   }

}

