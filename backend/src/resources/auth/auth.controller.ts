/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, response } from "express"
import { LoginDto, SignUpDto } from "./auth.types";
import { createUsuario } from "../usuario/usuario.service";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constansts";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import checkCredentials from "./auth.service";

const signup = async (req:Request, res:Response) => {
    const usuario: SignUpDto = req.body;
    try{
        const novoUsuario = await createUsuario({ ...usuario,tipoUsuarioId: TiposUsuarios.CLIENT});
        res.status(StatusCodes.OK).json(novoUsuario);
    } catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}
const login = async (req:Request, res:Response) => {
    const credentials:LoginDto = req.body;
    try{
        const usuario = await checkCredentials(credentials);
        if(!usuario) return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
        //Ao fazer o login, o sistema cria essas duas variáveis (expandidas no index)
        req.session.uid = usuario.id;
        req.session.tipoUsuarioId = usuario.tipoUsuarioId;

        res.status(StatusCodes.OK).json({nome:usuario.nome, tipoUsuario: usuario.tipoUsuarioId === TiposUsuarios.CLIENT ? 'client' : 'admin'});
    } catch(err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    } 
}
const logout = (req:Request, res:Response) => {
    if(!req.session.uid){ //Se ele nunca esteve logado
        return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED)
    }
    req.session.destroy((err)=>{
        if(err) return res.status(StatusCodes.BAD_REQUEST)
        res.status(StatusCodes.OK).json(ReasonPhrases.OK)
    }) 
}

export default {signup, login, logout}