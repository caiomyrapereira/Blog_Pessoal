import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/PostagemModel';
import { Tema } from '../model/TemaModel';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

  public postagem: Postagem = new Postagem();
  public postagens: Postagem[];

  private tema: Tema = new Tema();
  public temas: Tema[];
  public idTema:number;

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  public autoResize(e: any) {
    if (e.target.scrollHeight > e.target.offsetHeight) {
      e.target.rows += 1;
    }
  }

  public findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resps: Postagem[]) => {
      this.postagens = resps;
      console.log(this.postagens);
    });
  }

  public addPostagem(){
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;
    this.findNewPostagem(this.postagem);
  }

  public findNewPostagem(postagem:Postagem){
    this.postagemService.postPostagem( postagem ).subscribe( (resp: Postagem)=>{
      console.log(resp);
    });
  }

  public findAllTemas() {
    this.temaService.getAllTemas().subscribe((resps: Tema[]) => {
      this.temas = resps;
      console.log(this.temas);
    });
  }

  public findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp;
      console.log(this.tema);
    });
  }



  ngOnInit(): void {
    this.findAllPostagens();
    this.findAllTemas();
    this.findByIdTema(1);
    /*
    this.tema.id =1;
    this.postagem.tema = this.tema;
    this.postagem.titulo = 'seilaccxxxxxxcxcxcxc';
    this.postagem.texto = 'seila seila xxxxxxxxxxxxxxxxxxxxxxseila';
    

    console.log('Postagem:'+this.postagem.tema);

    this.findNewPostagem( this.postagem );
    */
  }

}
