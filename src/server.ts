import express, { Request, Response } from 'express'
import { runDb } from './repositories/db';
import { router } from './routes'
const app = express()
const port = process.env.PORT || 5000

const parserMiddleware = express.json()
app.use(parserMiddleware)


app.get('/', (req: Request, res: Response) => {
  res.send('Porra')
})

app.use('/brop', router)

const startApp = async () => {
  //await runDb()
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

startApp()
