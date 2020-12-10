import { Postagem } from './PostagemModel';

export class Tema {
    constructor(
    ) {}

    public id: number;
    public descricao: string;
    public postagem: Postagem[];
}