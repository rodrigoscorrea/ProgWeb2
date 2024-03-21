import {Router} from "express";
import compraCotroller from "./compra.cotroller";
const router = Router();


router.post("/:id",compraCotroller.adicionarItemCarrinho);
router.post("/", compraCotroller.efetuarCompra);

export default router;