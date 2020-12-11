import * as express from 'express'
import { Application, Request, Response } from 'express'
import { UserDTO } from './dto/user.dto'
const port = process.env.PORT || 3000

const app: Application = express()


app.get('/', (req: express.Request, res: Response) => {
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})