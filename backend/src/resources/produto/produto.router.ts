import { Router } from 'express';
import produtoController from './produto.controller';
//import produtoSchema from './produto.schema';
//import validate from 'middlewares/validate';
const router = Router();


// Produto controller
router.get('/', produtoController.index);
router.post('/', produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', produtoController.update);
router.delete('/:id', produtoController.remove);
export default router;