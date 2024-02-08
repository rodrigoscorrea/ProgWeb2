/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { createProduto, jaExiste, listProdutos, readProduto } from './produto.service';
import {CreateProdutoDto} from './produto.types'
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';

const index = async (req:Request, res:Response) => {
    try{
        const produtos = await listProdutos();
        res.status(StatusCodes.OK).json(produtos)
    } catch (error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

async function create(req: Request, res: Response) {
    const produto:CreateProdutoDto = req.body;
    try {
        if (await jaExiste(produto.nome)) {
            return res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
        }
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
    //quando o user for atualizar, verificar se o nome não é de outro produto já cadastrado
    // nome pode ser igual ao nome q ele tá tentando mudar, mas não pra outro já existente
}
const remove = async (req:Request, res:Response) => {}

export default {index,create,read,update,remove}