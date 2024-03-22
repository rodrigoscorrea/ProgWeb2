import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const comprar = async (produtos: string[], usuarioId: string) => {
    const compra = await prisma.compra.create({data : {usuarioId}});

    produtos.forEach(async (produtoId) => {
        await prisma.compraItem.create({data: {
            compraId: compra.id,
            produtoId, 
            quantidade: 1
        }})
    })
}

