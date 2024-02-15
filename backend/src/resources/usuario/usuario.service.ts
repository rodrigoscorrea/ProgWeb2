/* eslint-disable @typescript-eslint/no-unused-vars */
import { Usuario ,PrismaClient } from "@prisma/client";
import { CreateUsuarioDto, UpdateUsuarioDto } from "./usuario.types";

const prisma = new PrismaClient();

const createUsuario = async (usuario:CreateUsuarioDto):Promise<Usuario> => {
    return await prisma.usuario.create({ data: usuario})
}

export default createUsuario