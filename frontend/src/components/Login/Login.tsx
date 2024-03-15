
import api from "@/utils/api";
import { Box, Button, TextField, Typography } from "@mui/material";
import { FormEvent, useState, useContext } from "react";
import { useRouter } from "next/router";
import {AuthContext}  from "@/provider/AuthProvider";

export default function Login(){
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [error, setError] = useState<string>("");
    const router = useRouter();
    const {auth, setAuth} = useContext(AuthContext);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const credentials = {email, senha};
        api.post("/login", credentials, {withCredentials: true}).then((data) => {
            setAuth({nome:data.data.nome, tipoUsuario: data.data.tipoUsuario})
            router.push("/produto");
        }).catch((err) => { 
            console.log(credentials);
            if(err.response.status) setError("Email e/ou senha inválidos"); 
            console.log(err)
        });
    }
    return (<div>
        <h1>Login de Usuário</h1>
        <form onSubmit={onSubmit}>
            <Box sx={{mb:2}}>
                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} ></TextField>
            </Box >
            <Box sx={{mb:2}}>
                <TextField label="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} type="password"></TextField>
            </Box>
            <Box>
                <Typography variant="body2" sx={{color:"red"}}>{error}</Typography>
            </Box>
            <Button type = "submit" variant = "contained">Entrar</Button>
        </form>
    </div>)
}