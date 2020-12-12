import { Router } from 'express'
import { postLogin } from '../../controllers/Login'
import validateLogin from '../../middlewares/validateLogin.mid'

const loginRouter = Router()


loginRouter.post('/login', validateLogin, postLogin)

export default loginRouter