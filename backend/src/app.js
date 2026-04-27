const express = require('express')
const path = require('path')  
const cors = require('cors')
const Like = require("./model/likeschema")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'dist')))

const init = async () => {
  const exists = await Like.findOne()
  if (!exists) await Like.create({ count: 0 })
}
init()


app.get('/api/likes', async (req, res) => {
  const data = await Like.findOne()
  res.json({ count: data.count })
})

app.post('/api/likes', async (req, res) => {
  const data = await Like.findOneAndUpdate(
    {},
    { $inc: { count: 1 } },
    { new: true }
  )
  res.json({ count: data.count })
})
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})
module.exports = app