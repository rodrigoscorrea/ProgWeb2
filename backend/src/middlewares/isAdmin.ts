/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { TiposUsuarios } from "../resources/tipoUsuario/tipoUsuario.constansts";

const isAdmin = (req:Request, res:Response, next:NextFunction) => {
    if(!req.session.tipoUsuarioId || req.session.tipoUsuarioId === TiposUsuarios.CLIENT){
        return res.status(StatusCodes.FORBIDDEN).json(ReasonPhrases.FORBIDDEN);
    }
    next();
}

export default isAdmin;