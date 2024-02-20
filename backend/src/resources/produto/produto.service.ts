import { PrismaClient, Produto } from '@prisma/client';
import { CreateProdutoDto, UpdateProdutoDto } from './produto.types';

const prisma = new PrismaClient();
export async function listProdutos(): Promise<Produto[]> {
    return await prisma.produto.findMany();
}

export const jaExiste = async (nome:string): Promise<boolean> => {
    return await !!(prisma.produto.findUnique({where: {nome} }))
}

export async function createProduto(produto: CreateProdutoDto): Promise<Produto> {
    return await prisma.produto.create({ data: produto });
}

export async function readProduto(id:string):Promise<Produto | null>{
    return await prisma.produto.findUnique({where: {id}})
}

export async function updateProduto(id:string,produto:UpdateProdutoDto): Promise<Produto>{
    return await prisma.produto.update({ where:{id}, data : produto});
}

export async function deleteProduto(id:string): Promise<Produto>{
    return await prisma.produto.delete({where: {id}});
}

