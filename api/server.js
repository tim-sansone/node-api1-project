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

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    userModel.findById(id)
        .then(user => {
            if(user == null){
                res.status(404).json({message: "The user with the specified ID does not exist"})
                return
            }
            res.json(user)
        })
        .catch(err => res.status(500).json({message: "The user information could not be retrieved"}))
})

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    userModel.remove(id)
        .then(user => {
            if(user == null){
                res.status(404).json({message: "The user with the specified ID does not exist"})
                return
            }
            res.json(user)
        })
        .catch(err => res.status(500).json({message: "The user could not be removed"}))
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
