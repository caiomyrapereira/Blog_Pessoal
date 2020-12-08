import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../model/PostagemModel';
import { Tema } from '../model/TemaModel';

@Injectable({
  providedIn: 'root'
})
export class TemaService {


  constructor(
    private http: HttpClient
  ) { }

  private token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') + '')
  }


  public getAllTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>('http://localhost:9000/tema', this.token);
  }

  public getByIdTema(id:number):Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:9000/tema/${id}`, this.token);
  }

  public postTema(tema:Tema):Observable<Tema>{
    return this.http.post<Tema>('http://localhost:9000/tema', tema, this.token);
  }
}
