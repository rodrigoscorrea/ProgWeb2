import { readdir, readFile } from "fs/promises";
import { createServer } from "http";
import {config as dotEnvConfig} from "dotenv";
import { createLink } from "./utils/links";

dotEnvConfig();
const DIR = process.env.DIR ?? "./public"
const PORT = process.env.PORT ?? 3333

const server = createServer(async (req,res) => {
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})
    if(req.url === '/'){
        const files = await readdir(DIR);
        res.write(files.map(file => createLink(file)).join(""))
        res.end()
    } else if(req.url === "/favicon.ico"){
        res.end();
    } else {
        const content = await readFile(`${DIR}${req.url}`);
        res.end(content)
    }
    
})

server.listen(PORT, ()=>{
    console.log(`Aplicacao rodando na porta ${PORT}`)
});