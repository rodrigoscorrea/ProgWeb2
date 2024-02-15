import {Router} from 'express'
import usuarioController from './usuario.controller'
import validate from '../../middlewares/validate'
import usuarioSchema from './usuario.schema'

const router = Router()
router.get("/",usuarioController.index)
router.post("/",validate(usuarioSchema),usuarioController.create)
router.get("/:id",usuarioController.read)
router.post("/:id",usuarioController.update)
router.delete("/",usuarioController.remove)
export default router