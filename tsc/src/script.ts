import nome from "./data.js"

const container = document.getElementById("container");
if (container) container.innerHTML = nome;


interface Pessoa{
    nome : string,
    idade : number,
    endereco : string,
    possuiGato : boolean
}

let pessoa1: Pessoa = {
    nome : "Vivi",
    idade: 21,
    endereco: "puta que parui",
    possuiGato: true
}

class Person {
    nome : string;
    idade : number;
    private endereco : string;
    possuiGato : boolean;

    constructor(n:string, p:boolean, i:number, e:string){
        this.nome = n;
        this.possuiGato = p;
        this.idade = i;
        this.endereco = e
    }
}