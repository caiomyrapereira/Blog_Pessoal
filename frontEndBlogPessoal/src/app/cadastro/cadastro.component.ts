import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLoginModel';
import { User } from '../model/UserModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public name: String = '';
  public email: String = '';
  public newPassword: String = ''
  public password: String = '';


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  addUser() {
    const user: User = new User(0, this.name, this.email, this.password);
    console.log(user);

    this.authService.cadastrar(user).subscribe((resp) => {
      console.log(resp)
      this.router.navigate(['/login']);
      alert('Usuario cadastrado com sucesso!')
    });

  }
  ngOnInit(): void {
  }

}
