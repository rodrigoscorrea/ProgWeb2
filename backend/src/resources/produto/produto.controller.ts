/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { createProduto, deleteProduto, jaExiste, listProdutos, readProduto, updateProduto } from './produto.service';
import {
	ReasonPhrases,
	StatusCodes,
} from 'http-status-codes';
import { CreateProdutoDto } from './produto.types';

const index = async (req:Request, res:Response) => {
    try{
        const produtos = await listProdutos();
        res.status(StatusCodes.OK).json(produtos)
    } catch (error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

async function create(req: Request, res: Response) {
    const produto = req.body;
    try {
        const newProduto = await createProduto(produto);
        res.status(StatusCodes.CREATED).json(newProduto);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }   
}

const read = async (req:Request, res:Response) => {
    const {id} = req.params;
    try{
        const produto = await readProduto(id)
        if (!produto){
            return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }
        res.status(StatusCodes.OK).json(produto)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}

const update = async (req:Request, res:Response) => {
    const {id} = req.params;
    const enviado = req.body;
    try{
        const produto = await readProduto(id);
        if(!produto){
            return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }
        if(enviado.nome === produto.nome){
            return res.status(StatusCodes.CONFLICT).json(produto);
        }
        const updated = await updateProduto(id,enviado);
        res.status(StatusCodes.OK).json(enviado)
    } catch (err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    } 
}

const remove = async (req:Request, res:Response) => {
    const {id} = req.params;
    const alvo = req.body;
    try{
        const deletado = await deleteProduto(id);
        res.status(StatusCodes.OK).json(deletado);
    } catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}

export default {index,create,read,update,remove}