import { Injectable } from '@angular/core';
import { Filme } from '../domain/Filme';
import { HttpClient } from '@angular/common/http';
import { Observable, filter } from 'rxjs';
import { environment } from 'src/environment/environment'; 


@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  apiURL: string = environment.apiURLBase;

  constructor(private http: HttpClient) { }

  salvar( filme: Filme) : Observable <Filme>{
    return this.http.post<Filme>
    (this.apiURL + '/filmes', filme)
  }
  atualizar( filme: Filme) : Observable<any>{
    return this.http.put<Filme>
    (this.apiURL + '/filmes/'+ filme.id, filme)
     }

  getFilmes(): Observable <Filme[]>{ 
     return this.http.get<Filme[]>
     (this.apiURL + '/filmes')
    }

  getFilmeById(id: number): Observable <Filme>{ 
      return this.http.get<any>
      (this.apiURL + '/filmes/' + id);  
  }
  deletar(filme: Filme):Observable<any>{
    return this.http.delete<any>
    (this.apiURL + '/filmes/' + filme.id); 
  }

  
 findById1(): Filme{

      let filmes = new Filme();
      filmes.id = 20;
      filmes.titulo = 'pulpfiction';
      filmes.ano = 1991;
      filmes.sinopse = 'muito bom';
      filmes.data = '18/05/2023';
      return filmes ;
  }
 
}
