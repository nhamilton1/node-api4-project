require('dotenv').config()
const cors = require('cors')
const express = require('express')
const server = express()
const Users = require('./api/users/model')
server.use(cors())
server.use(express.json())


server.get('/api/users', async (req, res) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({
            message: "The users information could not be retrieved"
            })
    }
})

server.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body
        if(!username || !password) {
            res.status(400).json({
                message: "Please provide username and password"
            })
        } else {
            const newUser = await Users.insert({ username, password })
            res.status(201).json(newUser)
        }
    } catch (err) {
        res.status(500).json({
            message: "There was an error while saving the user to the database"
            })
    }
})


server.get('/', (req, res) => {
    res.send('<h1>Test api</h1>')
})


const port = process.env.PORT || 3000 

server.listen(port, () => {
    console.log(`listening on ${port}`)
})
