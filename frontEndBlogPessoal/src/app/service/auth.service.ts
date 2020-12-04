import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLoginModel';
import { User } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public logar(UserLogin: UserLogin) : Observable<UserLogin> {
    return this.http.post<UserLogin>('http://localhost:9000/usuarios/logar', UserLogin);
  }

  public cadastrar(User: User) : Observable<User>{
    return this.http.post<User>('http://localhost:9000/usuarios/cadastrar', User);
  }

  btnExit() {
    return !!localStorage.getItem('token');
  }

}
