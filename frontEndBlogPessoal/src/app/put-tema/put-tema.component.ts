import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tema } from '../model/TemaModel';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-tema',
  templateUrl: './put-tema.component.html',
  styleUrls: ['./put-tema.component.css']
})
export class PutTemaComponent implements OnInit {
  idTema: number;
  tema: Tema = new Tema();

  constructor(
    private temaService: TemaService,
    private route: ActivatedRoute
  ) { }

  public findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema.descricao = resp.descricao;
      this.tema.id = resp.id;
    });
  }

  public updatedTema() {
    console.log(this.tema)
    console.log(this.tema.descricao)
    this.temaService.putTema(this.tema).subscribe((resp:Tema) => {
      this.tema = resp;
    });
  }

  ngOnInit(): void {
    this.idTema = this.route.snapshot.params["id"];
    this.findByIdTema(this.idTema);

    console.log(this.idTema)
  }

}
