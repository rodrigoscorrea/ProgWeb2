import { Box, TextField, Button } from "@mui/material";
import React from "react";
import {useState, FormEvent} from "react";
import api from "@/utils/api";
import {Produto, CreateProdutoDto } from "@/types/produto";

interface Props {
    handleSubmit: (produto:CreateProdutoDto) => void,
    produto?:Produto;
}

function ProdutoForm({handleSubmit, produto} : Props){
    const [nome,setNome] = useState<string>(produto? produto.nome : "");
    const [preco, setPreco] = useState<number | undefined>(produto? produto.preco: undefined);
    const [estoque, setEstoque] = useState<number | undefined >(produto? produto.estoque: undefined);

    const onSubmit = (e:FormEvent) => {
        e.preventDefault();
        const produto = {nome : nome!, preco: preco!, estoque: estoque!};
        handleSubmit(produto);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <Box sx={{mb: 2}}>
                    <TextField label = "Nome" onChange={(e) => setNome(e.target.value)} required value={nome ?? ""}/>
                </Box>
                <Box sx={{mb: 2}}>
                    <TextField label = "Preco" onChange={(e) => setPreco(parseFloat(e.target.value))} required type="number" value={preco ?? ""}/>
                </Box>
                <Box sx={{mb: 2}}>
                    <TextField label = "Estoque" onChange={(e) => setEstoque(parseInt(e.target.value))} required type="number" value={estoque ?? ""}/>
                </Box>
                <Button type="submit" variant="contained">
                    Enviar
                </Button>
            </form>
        </div>
    )
}

export default ProdutoForm;