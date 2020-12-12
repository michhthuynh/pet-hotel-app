import { Router } from "express";
import loginRouter from "./auth/login.router";

const router = Router()
router.use('/auth', loginRouter)

export default router