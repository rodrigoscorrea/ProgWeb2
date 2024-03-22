import { PrismaClient} from "@prisma/client";
import { CreateCompraDTO } from "./compra.types";
import { produtoCarrinho } from "index";

const prisma = new PrismaClient();

export const comprar = async (produtos: produtoCarrinho[], usuarioId: string) => {
    const compra = await prisma.compra.create({data : {usuarioId}});
    produtos.forEach(async (produto) => {

        const produtoDTO: CreateCompraDTO = {
            produtoId: produto.id,
            quantidade: Object.values(produto.quantidade)[0]
        }
        await prisma.compraItem.create({data: {
            compraId: compra.id,
            produtoId: produtoDTO.produtoId,
            quantidade: produtoDTO.quantidade
        }});
    });
}

