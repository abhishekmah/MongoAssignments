const express = require("express");
const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/students", {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};

const app = express();
app.use(express.json());

const userSchemea = new mongoose.Schema({
    
})