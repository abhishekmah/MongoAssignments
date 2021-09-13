const express = require("express");
const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/Masai", {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};

const app = express();
app.use(express.json());

const studentSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    age: {type: String, required: true},
    gender: {type: String, required: true},
    batch: {type: String, required: true}
},
{
    versionKey: false,
    timestamps: true
})

const Student = mongoose.model("student", studentSchema)

app.get("/students", async (req, res) => {

    try{
        const user = await Student.find().lean().exec();
    }
})