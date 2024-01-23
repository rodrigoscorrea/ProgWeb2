import express from 'express'
import dotenv from 'dotenv'
import validateEnv from './utils/validateEnv'
//import morgan from 'morgan'
import logger from './middlewares/logger'


dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344
const app = express()
const LOG = process.env.LOG_DIR 
app.use(logger('simples', LOG))

app.get("/",(req,res) => {
    res.send("Hello World")
})

app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`)
})





