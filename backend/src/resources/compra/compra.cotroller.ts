import { Request, Response } from "express"
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { comprar } from "./compra.service";

const adicionarItemCarrinho = (req:Request, res: Response) => {
    const {id} = req.params
    const quantidade = req.body;

    if(!req.session.carrinhoShop){ //se carrinho estiver vazio basta não alterar o vetor
        req.session.carrinhoShop = [];
    }
    req.session.carrinhoShop.push({id: id, quantidade: quantidade});
    res.status(StatusCodes.OK).json(ReasonPhrases.OK);
}

const efetuarCompra = async (req:Request, res: Response) => {
    if(!req.session.uid){
        return res.status(StatusCodes.NOT_FOUND).json({msg:"Usuario não está logado"});
    }
    if(!req.session.carrinhoShop){
        return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NO_CONTENT);
    }
    try{
        await comprar(req.session.carrinhoShop, req.session.uid); 
        res.status(StatusCodes.OK).json(ReasonPhrases.OK);
    } catch(err){
        res.status(StatusCodes.BAD_REQUEST).json(ReasonPhrases.BAD_REQUEST);
    }
}

export default {adicionarItemCarrinho, efetuarCompra}


