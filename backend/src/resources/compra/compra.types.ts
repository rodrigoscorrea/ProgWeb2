import { CompraItem } from "@prisma/client";

export type CreateCompraDTO = Pick<CompraItem, 'produtoId' | 'quantidade'>