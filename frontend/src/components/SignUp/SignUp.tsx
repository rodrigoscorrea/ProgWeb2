import { SignUpDto } from "@/types/auth";
import api from "@/utils/api";
import { Box, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
function SignUp(){
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const router = useRouter();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const credentials: SignUpDto = {nome: nome!, email: email!, senha: senha!};
        api.post("/signup", credentials).then((data)=>router.push("/produto"));
    }
    return (<>
        <h1>Criação de Conta</h1>
        <form>
            <Box >
                <TextField label="nome" value={nome} required onChange={(e) => {setNome(e.target.value)}}>

                </TextField>
            </Box>
            <Box >
                <TextField label="email" value={email} required onChange={(e) => {setEmail(e.target.value)}}>

                </TextField>
            </Box>
            <Box >
                <TextField label="senha" value={senha} type = "password" required onChange={(e) => {setSenha(e.target.value)}}>

                </TextField>
            </Box>
            
        </form>
    </>)
}

export default SignUp;