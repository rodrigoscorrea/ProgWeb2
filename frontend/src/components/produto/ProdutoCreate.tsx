import { Box, TextField, Button } from "@mui/material";
import React from "react";
import {useState, FormEvent} from "react";
import api from "@/utils/api";
import { useRouter } from "next/router";

function ProdutoCreate(){
    const [nome,setNome] = useState<string>("");
    const [preco, setPreco] = useState<number>(0);
    const [estoque, setEstoque] = useState<number>(0);
    const router = useRouter();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const produto = {nome, preco, estoque};
        api.post("/produto", produto).then(() => {router.push("/produto")}).catch(err => console.log(err));
        
    };

    return(
        <div>
            <h2>Criação de Produto</h2>
            <form onSubmit={onSubmit}>
                <Box sx={{m: 2}}>
                    <TextField label = "Nome" onChange={(e) => setNome(e.target.value)} />
                </Box>
                <Box sx={{m: 2}}>
                    <TextField label = "Preco" onChange={(e) => setPreco(parseFloat(e.target.value))} />
                </Box>
                <Box sx={{m: 2}}>
                    <TextField label = "Estoque" onChange={(e) => setEstoque(parseInt(e.target.value))} />
                </Box>
                <Button type="submit" variant="contained">
                    Enviar
                </Button>
            </form>
        </div>
    )
}

export default ProdutoCreate;