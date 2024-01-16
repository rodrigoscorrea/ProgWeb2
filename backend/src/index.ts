import express from 'express'
import dotenv from 'dotenv'
import validateEnv from './utils/validateEnv'
import morgan from 'morgan'

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344
const app = express()

app.use(morgan('combined'))

app.get("/",(req,res) => {
    res.send("Hello World")
})

app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`)
})





