const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT ?? 4455
app.get("/", (req,res) => {
    res.send("Seja bem vindo ")
})

app.listen(PORT, ()=>{
    console.log(`API rodando na porta ${PORT}`)
})