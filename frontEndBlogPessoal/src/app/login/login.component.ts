import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLoginModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin  = new UserLogin('','','');

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public oppen(){
    this.authService.logar(this.userLogin).subscribe((resp:UserLogin) =>{
       console.log('token : '+resp.token)
       localStorage.setItem('token', resp.token.replace('Basic','Basic ') );
      this.router.navigate(['/feed']);
    });
  }

  public test(){
    console.log(this.userLogin);
  }

  ngOnInit(): void {
  }

}
