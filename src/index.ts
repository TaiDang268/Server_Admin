import express from 'express'
import { run } from './services/database.service'
import { connectDB, createIndexAuthor } from './services/connectDB'
const app = express()
const router = express.Router()
const PORT = 5555

app.use((req, res, next) => {
  console.log('sdsd')
  next()
})
// run().catch(console.dir)
connectDB().then(() => {
  createIndexAuthor()
})
router.get('/tweets', (req, res) => {
  res.json({ data: 'asd' })
})
app.use('/api', router)
app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`)
})
