/* eslint-disable @typescript-eslint/no-unused-vars */
import {Router} from 'express';
import produtoRouter from '../resources/produto/produto.router'
import exercicioRouter from '../resources/exercicio/exercicio.router'
import languageRouter from "../resources/language/language.router"
const router = Router();

router.use("/produto",produtoRouter);
router.use("/language",languageRouter)
router.use("/exercise",exercicioRouter)


export default router;