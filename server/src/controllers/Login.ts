import { Request, Response } from 'express'
import { UserDTO } from '../dto/requests/user.dto'

export const postLogin = async (req: Request, res: Response) => {
  const body: UserDTO = req.body
  res.json(body)
}