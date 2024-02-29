import { Produto } from "@/types/produto";

const produtos: Produto[] = [
    {id : 1, nome: "Celta", preco: 10000, estoque: 45},
    {id : 2, nome: "Mouse", preco: 90, estoque: 22},
    {id : 3, nome: "Geladeira", preco: 3500, estoque: 15},
    {id : 3, nome: "banana", preco: 22, estoque: 90}
];

export const getOneProduto = (id:number):Produto | undefined => { //undefined pq o find pode retornar o undefined
    return produtos.find((prod) => prod.id === id);
};

export const getAllProduto = () => {
    return produtos;
}

