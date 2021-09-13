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
    batch: {type: String, required: true},
    course: {type: String, required: true},
    instructor: {type: String, required: true}
},
{
    versionKey: false,
    timestamps: true
})

const Student = mongoose.model("student", studentSchema)

app.get("/students", async (req, res) => {

    try{
        const student = await Student.find().lean().exec();

        res.send(student);
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
        }
});

app.post("/students", async (req, res) => {

    try{
        const student = await Student.create(req.body);

        res.status(201).json({student});
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
        }
});

app.listen(2345, async function() {

    await connect();
    console.log("listening to port 2345")
})