/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { createProduto, jaExiste, listProdutos } from './produto.service';
import {CreateProdutoDto} from './produto.types'

const index = async (req:Request, res:Response) => {
    try{
        const produtos = await listProdutos();
        res.status(201).json(produtos)
    } catch (error){
        res.status(500).json(error)
    }
}

async function create(req: Request, res: Response) {
    const produto:CreateProdutoDto = req.body;
    try {
        if (await jaExiste(produto.nome)) {
            return res.status(400).json({ msg: 'Produto já existe' });
        }
        const newProduto = await createProduto(produto);
        res.status(201).json(newProduto);
    } catch (err) {
        res.status(500).json(err);
    }
}


const read = async (req:Request, res:Response) => {}

const update = async (req:Request, res:Response) => {}
const remove = async (req:Request, res:Response) => {}

export default {index,create,read,update,remove}