import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../model/PostagemModel';
import { Tema } from '../model/TemaModel';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {

  constructor(
    private temaService: TemaService,
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  
  public idTema:number;
  public idPostagem:number;
  public postagem:Postagem = new  Postagem();
  
  public tema : Tema = new Tema();
  public temas:Tema[];

  public getAlltemas(){
    this.temaService.getAllTemas().subscribe((resp:Tema[]) =>{
      this.temas = resp;
    });
  }

  public updatePostagem() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.postagemService.putPostagem(this.postagem).subscribe( (resp:Postagem)=>{
      console.log(this.postagem);
      this.router.navigate(['/feed']);
      alert('Postagem alterada com sucesso!');
    });

    
  }

  public findByIdPostagem(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp:Postagem)=>{
      this.postagem = resp;
      console.log(resp)
    });
  }


  ngOnInit(): void {
    this.idPostagem = this.route.snapshot.params["id"];
    this.findByIdPostagem(this.idPostagem);
    console.log(this.idPostagem);
    console.log(this.postagem.id)

    this.getAlltemas();
  }

}
