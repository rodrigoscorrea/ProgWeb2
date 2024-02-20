/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import {createUsuario, jaExiste, listUsuarios} from "./usuario.service"

const index = async (req:Request, res:Response) => {
    try{
        const usuarios = await listUsuarios();
        res.status(StatusCodes.OK).json(usuarios)
    } catch (error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

const create = async (req:Request, res:Response) => {
    const usuario = req.body;
    try {
        const novoUsuario = await createUsuario(usuario);
        res.status(StatusCodes.CREATED).json(novoUsuario)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}
const read =  async (req:Request, res:Response) => {

}
const update = async (req:Request, res:Response) => {

}
const remove = async (req:Request, res:Response) => {

}

export default {index, create, read, update, remove}