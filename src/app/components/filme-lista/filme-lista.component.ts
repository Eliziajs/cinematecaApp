import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'
import { Filme } from '../../domain/Filme';
import { FilmeService } from '../../services/filme.service';
import { Diretor } from 'src/app/domain/Diretor';
import { DiretorService } from 'src/app/services/diretor.service';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-filme-lista',
  templateUrl: './filme-lista.component.html',
  styleUrls: ['./filme-lista.component.css']
})
export class FilmeListaComponent implements OnInit {

  filmes: Filme[] = [];
  diretores: Diretor[] = [];
  //@Input() diretor = Diretor!
  filmeSelecionado!: Filme;
  mensagemSucesso!: string;
  mensagemErro!: string;
  diretor: any;

  constructor(
    private service: FilmeService,
    private diretorService: DiretorService,
    private router: Router) { }

  ngOnInit(): void {

    this.service
      .getFilmes()
      .subscribe((filme: Filme[]) => {
        this.filmes = filme
        console.log(this.filmes)
      })
    this.diretorService
      .getDiretor()
      .subscribe((diretores: Diretor[]) => {
        this.diretores = diretores
        console.log(this.diretores)
      })

      this.router.navigate(['/filme-lista']); 

      
  }

  filmeSelecionaDelecao(filmes: Filme) {
    this.filmeSelecionado = filmes;
  }

  valueAscOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.value.localeCompare(b.value);
  }

  deletarFilme() {
    this.service
      .deletar(this.filmeSelecionado)
      .subscribe(response =>
        this.mensagemSucesso = 'cliente deletado com sucesso!',
        erro =>
          this.mensagemErro = 'Ocorreu um erro ao deletar')

  }
  irParaFilmeVisualiza() {
    this.router.navigate(['/filme-visualiza'])
  }
  irParaFilmeLista() {
    this.router.navigate(['/filme-lista'])
  }

}

