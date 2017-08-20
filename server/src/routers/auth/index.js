import { Router } from 'express'
import passportConf from '../../middlewares/authentication'
import authenticated from '../../utils/authenticatedRoute'
import register from './register'
import login from './login'
import me from './me'

const router = Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/me').get(authenticated, me)

export default router