import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Filme } from 'src/app/domain/Filme';
import { FilmeService } from 'src/app/services/filme.service';
import { DiretorService } from 'src/app/services/diretor.service';
import { Observable } from 'rxjs';
import { Diretor } from 'src/app/domain/Diretor';
import { Genero } from 'src/app/domain/Genero';
import { GeneroService } from 'src/app/services/genero.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/domain/Post';
import { PostListaComponent } from '../post-lista/post-lista.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filme-visualiza',
  templateUrl: './filme-visualiza.component.html',
  styleUrls: ['./filme-visualiza.component.css']
})
export class FilmeVisualizaComponent {

  @Input() filme! : Filme;
  @Input() diretor!: Diretor;
  @Input() genero!: Genero;
  @Input() post!:Post;
  postForms!: FormGroup;
  
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
    private diretorService : DiretorService,
    private generoService: GeneroService,
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    )
    {
      this.post = new Post();
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
      let paramDir : Observable<Params> = this.activatedRoute.params
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

      let paramGen : Observable<Params> = this.activatedRoute.params
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
      this.postForms = new FormGroup({
        id: new FormControl(''),
        mensagem: new FormControl('',[Validators.required]),
      });
    

  }
  OnSubmit(){
    if(this.postForms.invalid)
    return
  
    if(this.id){
      this.postService
      .atualizar(this.post)
      .subscribe({
        next: response=>this.success = true,
        error:erro=>this.error = erro.error
    })
    }else{
        this.service
        .salvar(this.post)
        .subscribe({
          next: response=>this.success = true,
          error:erro=>this.error = erro.error
          
      })
      console.log(this.post)
    }
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

 get mensagem(){
  return this.postForms.get('mensagem')!;
 }

}
