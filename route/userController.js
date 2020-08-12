// User

const express = require('express');
const router = express.Router()
const Users = require('../model/user');

router.get('/', (req, res) => {
    Users.find({}, (err, data) => {
        res.send(data);
    })
})

router.get('/user', (req, res) => {
    Users.find({}, (err, data) => {
        res.send(data);
    })
})

module.exports = router;