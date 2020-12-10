import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/TemaModel';
import { TemaService } from '../service/tema.service';
@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

  public tema: Tema = new Tema();
  public temas: Tema[];


  constructor(
    private temaService: TemaService
  ) { }

  private getAllTemas() {
    this.temaService.getAllTemas().subscribe((resps: Tema[]) => {
      this.temas = resps;
      console.log(this.temas);
      console.log(this.temas[0].descricao)
    });
  }

  public addTema(){
    this.temaService.postTema( this.tema ).subscribe((resp:Tema) =>{
      console.log(resp);
      this.getAllTemas();
    })
  }


  ngOnInit(): void {
    this.getAllTemas();
  }

}
