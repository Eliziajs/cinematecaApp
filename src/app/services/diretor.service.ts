import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Diretor } from '../domain/Diretor';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  apiURL: string= environment.apiURLBase;

  constructor(private http: HttpClient) { }

  salvarDiretor (diretor: Diretor): Observable<Diretor>{
    return this.http.post<Diretor>
    (this.apiURL + '/diretor', diretor)
  }
  atualizarDiretor(diretor: Diretor): Observable<any>{
    return this.http.put<Diretor>
    (this.apiURL + diretor.id, diretor)
  }
  getDiretor():Observable<Diretor[]>{
    return this.http.get<Diretor[]>
    (this.apiURL + '/diretor/');
  }
  getDiretorById(id: number): Observable<Diretor>{
    return this.http.get<any>
    (this.apiURL + '/diretor/' + id)
  }

  deletar(diretor: Diretor):Observable<any>{
    return this.http.delete<any>
    (this.apiURL + '/diretor/' + diretor.id); 
  }
}