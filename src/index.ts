import express from 'express'
import { run } from './services/database.service'
import { connectDB } from './services/connectDB'
import dotenv from 'dotenv'
import { routes } from '~/routes/index.routes'

dotenv.config()

const app = express()
const router = express.Router()
const PORT = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  next()
})

connectDB()
router.get('/tweets', (req, res) => {
  res.json({ data: 'asd' })
})
app.use('/api', router)
routes(app)
app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`)
})
