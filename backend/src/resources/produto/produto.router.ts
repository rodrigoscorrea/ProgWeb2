import { Router } from 'express';
import produtoController from './produto.controller';
import produtoSchema from './produto.schema';
import validate from '../../middlewares/validate';
const router = Router();


// Produto controller
router.get('/', produtoController.index);
router.post('/', validate(produtoSchema),produtoController.create); //chama produtoController somente se o validate usar o next()
router.get('/:id', produtoController.read);
router.put('/:id', validate(produtoSchema),produtoController.update);
router.delete('/:id', produtoController.remove);
export default router;