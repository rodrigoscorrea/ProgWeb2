/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';

import validateEnv from './utils/validateEnv'
import router from './router'
import logger from './middlewares/logger'
import setCookieLang from './middlewares/setCookieLanguage'

import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger-output.json";

declare module 'express-session' {
    interface SessionData{
        uid: string,
        tipoUsuarioId:string
    }
}

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344;
const app = express();
const LOG = process.env.LOG_DIR ?? "../logs/index.log";

app.use(logger('simples', LOG));
app.use(express.json());
app.use(cookieParser());
app.use(setCookieLang);
app.use(session({
    genid: (req) => uuidv4(),
    secret: 'Hi9Cf#mK9Dm#@SmA76#4MP2sm@18',
    resave: true, //user só é desconectado 2 hrs dps do ultimo acesso
    saveUninitialized: true //msm se user não esteja logado
}));
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
})







