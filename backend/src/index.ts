import express from 'express'
import dotenv from 'dotenv'
import validateEnv from './utils/validateEnv'
import router from './router/router'
import logger from './middlewares/logger'


dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344
const app = express()
const LOG = process.env.LOG_DIR ?? "../logs/index.log"

app.use(logger('simples', LOG))
app.use(express.json());
app.use(router)

app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`)
})







