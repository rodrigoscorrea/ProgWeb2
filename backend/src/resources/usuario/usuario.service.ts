/* eslint-disable @typescript-eslint/no-unused-vars */
import { Usuario ,PrismaClient } from "@prisma/client";
import { CreateUsuarioDto, UpdateUsuarioDto } from "./usuario.types";
import { genSalt, hash } from "bcryptjs";

const prisma = new PrismaClient();

export async function listUsuarios(): Promise<Usuario[]> {
    return await prisma.usuario.findMany();
}

export async function createUsuario(usuario:CreateUsuarioDto):Promise<Usuario>{
    const salt = await genSalt(parseInt(process.env.SALT_ROUNDS!)); //! para indicar q você pode garantir que vai ser uma string
    const senha = await hash(usuario.senha, salt);
    return await prisma.usuario.create({ data: {...usuario, senha},});
}

export const jaExiste = async (email:string): Promise<boolean> => {
    return await !!(prisma.usuario.findUnique({where: {email} }))
}

export async function readUsuario(id:string):Promise<Usuario | null>{
    return await prisma.usuario.findUnique({where: {id}})
}

export async function updateUsuario(id:string,usuario:UpdateUsuarioDto): Promise<Usuario>{
    return await prisma.usuario.update({ where:{id}, data : usuario});
}

export async function deleteUsuario(id:string): Promise<Usuario>{
    return await prisma.usuario.delete({where: {id}});
}
