/* eslint-disable @typescript-eslint/no-unused-vars */
import {Router} from 'express';
import produtoRouter from '../resources/produto/produto.router'
import exercicioRouter from '../resources/exercicio/exercicio.router'
import languageRouter from "../resources/language/language.router"
import usuarioRouter from "../resources/usuario/usuario.router"
const router = Router();

router.use("/produto",produtoRouter);
router.use("/language",languageRouter)
router.use("/exercise",exercicioRouter)
router.use("/usuario",usuarioRouter)


export default router;