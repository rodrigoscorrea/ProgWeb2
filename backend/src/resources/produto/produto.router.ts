import { Router } from 'express';
import produtoController from './produto.controller';
import produtoSchema from './produto.schema';
import validate from '../../middlewares/validate';
import isAdmin from '../../middlewares/isAdmin';

const router = Router();

// Produto controller
router.get('/', produtoController.index);
router.post('/',isAdmin, validate(produtoSchema),produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id',isAdmin, validate(produtoSchema),produtoController.update);
router.delete('/:id', isAdmin, produtoController.remove);

export default router;