import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Post } from '../domain/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiURL: string= environment.apiURLBase;

  constructor(private http: HttpClient) { }


  salvar (posts: Post): Observable<Post>{
    return this.http.post<Post>
    (this.apiURL + '/post', posts)
  }
  atualizar(posts: Post): Observable<any>{
    return this.http.put<Post>
    (this.apiURL + posts.id, posts)
  }
  getPost():Observable<Post[]>{
    return this.http.get<Post[]>
    (this.apiURL + '/post');
  }
  getPostById(id: number): Observable<Post>{
    return this.http.get<any>
    (this.apiURL + '/post/' + id)
  }

  deletar(post: Post):Observable<any>{
    return this.http.delete<any>
    (this.apiURL + '/post/' + post.id); 
  }
}
