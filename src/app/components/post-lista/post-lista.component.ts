import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/domain/Post';
import { FilmeService } from 'src/app/services/filme.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-lista',
  templateUrl: './post-lista.component.html',
  styleUrls: ['./post-lista.component.css']
})
export class PostListaComponent {

  posts:Post[] = [];
 
  postSelecionado!: Post;
  mensagemSucesso!: string;
  mensagemErro!: string;
  post: any;
  success: boolean =false;
  error?: string[];
  id: any;

  constructor(
    private service: FilmeService,
    private postService:PostService,
    private router: Router) { }



  postSelecionaDelecao(posts: Post) {
    this.postSelecionado = posts;
  }

  postSelecionadoPorId(index: any, posts: Post) {
    console.log(posts);
    return posts ? posts.id : undefined;
  }

  deletarPost() {
    this.service
      .deletar(this.postSelecionado)
      .subscribe(response =>
        this.mensagemSucesso = 'cliente deletado com sucesso!',
        erro =>
          this.mensagemErro = 'Ocorreu um erro ao deletar')

  }

  
}



