require('dotenv').config()

const express = require('express')

const server = express()
server.use(express.json())

server.get('/hello', (req, res) => {
  res.send('<h1>HELLO THERE!</h1>')
})

server.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'Nick'}])
})

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`listening on ${port}`)
})
