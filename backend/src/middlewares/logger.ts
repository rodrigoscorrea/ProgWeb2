/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFileSync, writeFileSync, createWriteStream } from 'fs';
import { join } from 'path';

function syncWriteFile(filename: string, data: any) {
    writeFileSync(join(__dirname, filename), data, {
      flag: 'a',
    });
    const contents = readFileSync(join(__dirname, filename), 'utf-8'); 
    return contents;
}
function logger(type, directory){
    if (type === "simples"){
        return((req, res, next) => {
            const data = new Date().toISOString()
            console.log(`${data} ${req.url} ${req.method}`)
            const content = `${data} ${req.url} ${req.method}\n`
            syncWriteFile(directory, content)
            next() as any
        })
    } else if (type === "completo"){
        return((req, res, next) => {
            const data = new Date().toISOString()
            const content = `${data} ${req.url} ${req.method} ${req.httpVersion} ${req.get('User-Agent')}\n`
            syncWriteFile(directory, content)
            next()
        }) as any
    }
}
export default logger