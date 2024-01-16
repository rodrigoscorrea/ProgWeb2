import { createServer } from "http";
import {config as dotEnvConfig} from "dotenv";
import { readdir, readFile } from "fs/promises";

dotEnvConfig();
const PORT = process.env.PORT ?? 3333
const filepath = 'exercicio2/index.txt'
const server = createServer(async (req,res) => {
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})
    const content = await readFile(filepath);
    res.write(content)
    
    res.end()
})

server.listen(PORT, ()=>{
    console.log(`Aplicacao rodando na porta ${PORT}`)
});