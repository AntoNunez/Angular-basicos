import { ListaItem } from "./lista.item.model";


export class Lista {

    id:number;
    titulo:string;
    creadaEn:Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

constructor(titulo:string){

    this.titulo = titulo;
    this.creadaEn= new Date();
    this.terminadaEn = new Date();
    this.terminada = false;
    this.items = [];
    this.id = new Date().getTime(); //getTime es solo de prueba, en una api debiera entregar id
}

}