import { Component, Input, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Filme } from 'src/app/domain/Filme'; 
import { FilmeService } from 'src/app/services/filme.service';
import { Diretor } from 'src/app/domain/Diretor';
import { DiretorService } from 'src/app/services/diretor.service';



@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit{

  //filme!: Filme;
  @Input() filme! : Filme;
  //@Input() diretor!: Diretor;
  filmeForms!:FormGroup;
  diretorForms!: FormGroup;
  //diretor!: Diretor;
  success: boolean =false;
  error?: string[];
  id: any;


  constructor(
    public service: FilmeService, 
    public diretorService : DiretorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    //public fb: FormBuilder,
    //public formGroup: FormGroup 
    )
    { 
    this.filme = new Filme();
    //this.diretor = new Diretor();
   
  }
 
 ngOnInit(): void {

  this.filmeForms = new FormGroup({
    id: new FormControl(''),
    titulo: new FormControl('',[Validators.required]),
    ano: new FormControl('',[Validators.required]),
    sinopse: new FormControl('',[Validators.required]),
   // diretor: new FormControl('',[Validators.required]),
  });

    this.diretorForms = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('',[Validators.required]),
  });

  
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
    /**let paramDir : Observable<Params> = this.activatedRoute.params
    paramDir.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
      this.diretorService
      .getDiretorById(this.id)
      .subscribe(
        response => this.diretor =response, 
        errorResponse =>this.diretor = new Diretor()
      )
      }
    })**/
    
 }
 get titulo(){
  return this.filmeForms.get('titulo')!;
 }
 get ano(){
  return this.filmeForms.get('ano')!;
 }
 get sinopse(){
  return this.filmeForms.get('sinopse')!;
 }
/**  get diretor(){
  return this.filmeForms.get('nome')!;
 }**/



 OnSubmit(){
  console.log(this.filmeForms)
  if(this.filmeForms.invalid)
  return

  if(this.id){
    this.service
    .atualizar(this.filme)
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
  this.router.navigate(['/filme-lista']);  
}
  
}

