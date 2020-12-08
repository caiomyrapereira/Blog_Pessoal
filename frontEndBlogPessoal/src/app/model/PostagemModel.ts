import { Tema } from './TemaModel';

export class Postagem {
    constructor() { }

    public id: number;
    public titulo: string;
    public texto: String;
    public date: Date;
    public tema: Tema;
} 