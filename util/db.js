const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testdb", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err) {
        console.error("Error occured")
    } else {
        console.warn("Connected to db")
    }
})