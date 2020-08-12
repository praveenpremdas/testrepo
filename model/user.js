const mongoose = require('mongoose');

const users = mongoose.Schema({
    name: String,
    age: Number,
    password: String,
    email: String,
    gender: {
        type: String,
        default: 'Male'
    }
});

const userModel = mongoose.model('User', users);

module.exports = userModel;