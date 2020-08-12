require("./util/db");
const express = require('express');
const app = express();

app.use('/user', require('./route/userController'));


module.exports = app;