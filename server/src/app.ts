import * as express from 'express'
import { Application, Request, Response } from 'express'
import router from './router/index.router'
const cors = require('cors')

const port = process.env.PORT || 5000

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})