const express = require("express");
const mongoose = require("mongoose");


const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/students", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
};

const app = express();

app.use(express.json());

//first step create schema
const userSchema = new mongoose.Schema({
    first_name: { type:String, required:true},
    last_name: { type:String, required:true},
    gender: { type:String, required:false, default: "Male"},
    email: { type:String, required:true},
    age: { type:Number, required:true},
},
{
    versionKey: false,
    timestamps: true
})

const User = mongoose.model("user", userSchema)


app.get("/users", async (req, res) => {

    try{
        const user = await User.find({age: {$gt: 15}}).lean().exec();

        res.send(user);
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
    }
});

app.post("/users", async (req, res) => {

    try{
        const user = await User.create(req.body);

        res.status(201).json({user});
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
    }
});

app.patch("/users/:id", async (req, res) => {

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.status(200).json({user});
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
    }
});
app.get("/users/:id", async (req, res) => {

    try{
        const user = await User.findById(req.params.id).lean().exec();

        res.status(200).json({user});
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
    }
});

app.delete("/users/:id", async (req, res) => {

    try{
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json({user});
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
    }
});


app.listen(2345, async function() {

    await connect();
    console.log("listening to port 2345")
})