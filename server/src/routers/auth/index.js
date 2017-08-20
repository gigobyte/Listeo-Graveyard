import { Router } from 'express'
import register from './register'
import login from './login'

const router = Router()

router.route('/register').post(register)
router.route('/login').post(login)

export default router