import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Filme } from '../filme';
import { FilmeService } from '../../filme.service';


@Component({
  selector: 'app-filme-lista',
  templateUrl: './filme-lista.component.html',
  styleUrls: ['./filme-lista.component.css']
})
export class FilmeListaComponent implements OnInit {

  filmes: Filme[] = [];
  filmeSelecionado!: Filme;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(
    private service: FilmeService,
    private router: Router) {}

  ngOnInit(): void {
   
      this.service
      .getFilmes()
      .subscribe(resposta => this.filmes = resposta)
  }
 
  filmeSelecionaDelecao(filme: Filme){
    this.filmeSelecionado = filme;
  }
  deletarFilme(){
    this.service
   .deletar(this.filmeSelecionado)
    .subscribe(response => 
      this.mensagemSucesso = 'cliente deletado com sucesso!',
      erro=> 
      this.mensagemErro = 'Ocorreu um erro ao deletar')

  }

}

