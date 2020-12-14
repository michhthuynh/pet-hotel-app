import { NextFunction, Request, Response } from "express";
import { UserDTO } from "../dto/requests/user.dto";
import * as Yup from 'yup'

export default (req: Request, res: Response, next: NextFunction) => {
  const body: UserDTO = req.body
  const { username, password } = body
  let schema = Yup.object().shape({
    username: Yup.string().min(8).max(256).required(),
    password: Yup.string().min(8).max(256).required()
  })
  schema.validate({ username, password })
    .then(result => {
      next()
    })
    .catch(err => {
      console.log(`Error : ${err.message}`)
      res.sendStatus(400)
      return
    })
}