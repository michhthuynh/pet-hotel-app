import { Router } from 'express'
import { postLogin } from '../controllers/Login'
import validateLogin from '../middlewares/validateLogin.mid'

const authRouter = Router()


authRouter
  // login
  .post('/login', validateLogin, postLogin)


export default authRouter