import { SignUpDto } from "@/types/auth";
import api from "@/utils/api";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

function SignUp(){
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [confirmSenha, setConfirmSenha] = useState<string>("");
    const [error, setError] = useState("");
    const [viewSenha, setViewSenha] = useState<boolean>(false);
    const [viewConfirmSenha, setViewConfirmSenha] = useState<boolean>(false);

    const router = useRouter();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(senha !== confirmSenha) setError("As senhas não são iguais");
        else {
            const credentials: SignUpDto = {nome: nome!, email: email!, senha: senha!};
            api.post("/signup", credentials).then((data)=>router.push("/produto"));
        }
    }
    return (<>
        <h1>Criação de Conta</h1>
        <form onSubmit={onSubmit}>
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

            <Box >
                <TextField label="confirmSenha" value={confirmSenha} type = "password" required onChange={(e) => {setConfirmSenha(e.target.value)}}>
                </TextField>
            </Box>

            <Box>
                <Typography variant="body1" sx = {{color: "red"}}>{error}</Typography>
            </Box>
            <button type = "submit" onClick={onSubmit}>Enviar</button>
        </form>
    </>)
}

/* InputProps={
                    <InputAdornment position="end"><IconButton onClick={() => {
                        setViewSenha(!viewSenha);
                    }}>
                        <VisibilityIcon></VisibilityIcon>
                        </IconButton>
                    </InputAdornment>}> */
export default SignUp;