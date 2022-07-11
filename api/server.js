// BUILD YOUR SERVER HERE
const express = require('express');
const server = express();
server.use(express.json());

const userModel = require('./users/model')

server.post('/api/users', (req, res) => {
    const { body } = req;
    if(body.name == null || body.bio == null){
        res.status(400).json({message: "Please provide name and bio for the user"})
        return
    }
    userModel.insert(body).then(user => {
        res.status(201).json(user)
    })
})

server.get('/api/users', (req, res) => {
    userModel.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({message: "The users information could not be retrieved"}))
})


module.exports = server; // EXPORT YOUR SERVER instead of {}
