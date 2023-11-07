import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Genero } from '../domain/Genero';  
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  apiURL: string= environment.apiURLBase;

  constructor(private http: HttpClient) { }


  salvarGenero (genero: Genero): Observable<Genero>{
    return this.http.post<Genero>
    (this.apiURL + '/genero', genero)
  }
  atualizarGenero(genero: Genero): Observable<any>{
    return this.http.put<Genero>
    (this.apiURL + genero.id, genero)
  }
  getGenero():Observable<Genero[]>{
    return this.http.get<Genero[]>
    (this.apiURL + '/genero/');
  }
  getGeneroById(id: number): Observable<Genero>{
    return this.http.get<any>
    (this.apiURL + '/genero/' + id)
  }

  deletar(genero: Genero):Observable<any>{
    return this.http.delete<any>
    (this.apiURL + '/genero/' + genero.id); 
  }
}
