import { Postagem } from './PostagemModel';

export class Tema {
    constructor(
       public id: number,
       public descript: String,
       public  post: Postagem[]
    ) {}
}