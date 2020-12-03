import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/PostagemModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private nome: String = '';

  constructor() {


  }

  ngOnInit(): void {
    this.nome = 'caio';
    console.log(this.nome);
  }

}
