import { Request, Response } from 'express';
import { createProduto, jaExiste } from './produto.service';
async function create(req: Request, res: Response) {
    const produto = req.body;
    try {
    if (await jaExiste(produto.nome)) {
    return res.status(400).json({ msg: 'Produto já existe' });
    }
    const newProduto = await createProduto(produto);
    res.status(201).json(newProduto);
    } catch (err) {
    res.status(500).json(err);
    }
}

