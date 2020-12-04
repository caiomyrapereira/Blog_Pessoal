import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/PostagemModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private nome: String = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  public exit($e:any){
    this.router.navigate(['/home']);
    localStorage.clear();
  }

  public onUser(){
     return this.authService.btnExit();
  }

  ngOnInit(): void {
    this.nome = 'caio';
    console.log(this.nome);
  }


}
