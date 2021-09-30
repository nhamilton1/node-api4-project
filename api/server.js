const express = require('express')
const Users = require('./users/model')
const server = express()
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
        const { name, bio } = req.body
        if(!name || !bio) {
            res.status(400).json({
                message: "Please provide name and bio for the user"
            })
        } else {
            const newUser = await Users.insert({ name, bio })
            res.status(201).json(newUser)
        }
    } catch (err) {
        res.status(500).json({
            message: "There was an error while saving the user to the database"
            })
    }
})

