/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const adicionarItemCarrinho = (req:Request, res: Response) => {
    const {id} = req.params;
    if(!req.session.carrinhoShop){
        req.session.carrinhoShop = [];
    }
    req.session.carrinhoShop.push(id);
    res.status(StatusCodes.OK).json(ReasonPhrases.OK);
}

const efetuarCompra = (req:Request, res: Response) => {

}

export default {adicionarItemCarrinho, efetuarCompra}


