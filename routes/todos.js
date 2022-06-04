import { Router } from 'express'
import * as todoCtrl from '../controllers/todo.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/* ------------------ Public Routes ------------------ */
router.get('/', todoCtrl.index)


/* ------------------ Private Routes ------------------ */
router.use(decodeUserFromToken)
router.post('/', checkAuth, todoCtrl.create)
router.patch('/:id', checkAuth, todoCtrl.update)
router.delete('/:id', checkAuth, todoCtrl.delete)


export { router }