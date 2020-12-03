import { Tema } from './TemaModel';

export class Postagem {
    constructor(
        public id: number,
        public title: string,
        public text:String,
        public date:Date,
        public tema:Tema
    ) { }
} 