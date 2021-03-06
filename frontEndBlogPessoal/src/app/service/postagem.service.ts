import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../model/PostagemModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  private token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') + '')
  }

  public getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('http://localhost:9000/postagens', this.token);
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`http://localhost:9000/postagens/${id}`, this.token);
  }

  public postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('http://localhost:9000/postagens', postagem, this.token);
  }

  public putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>('http://localhost:9000/postagens', postagem, this.token);
  }

  public deletePostagem(id:number){
    return this.http.delete(`http://localhost:9000/postagens/${id}`, this.token);
  }

}
