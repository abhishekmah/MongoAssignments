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
        // const student = await Student.find().lean().exec();
        // const student = await Student.find({age: {$gt: 18}}).lean().exec();
        
        
        
        const student = await Student.find({"course":"full stack web development"}).lean().exec();
        res.send(student);


        // const student = await Student.find({"gender": "Male"}).lean().exec();
        // const student1 = await Student.find({"gender": "Female"}).lean().exec();
        // let num = Object.keys(student).length;
        // let num1 = Object.keys(student1).length;
        // res.send({"Number of Male students": num, "Number of Female students": num1, "Number of Total students": num + num1});


        // const student = await Student.find({"batch": "app 3"}).lean().exec();
        
        // const student1 = await Student.find({"batch": "web 3"}).lean().exec();

        // let num = Object.keys(student).length;
        // let num1 = Object.keys(student1).length;
        
        // if(num>num1)
        // {
        //     res.send({"app 3": num});
        // }
        // else
        // {
        //     res.send({"web 3": num1});
        // }

    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
        }
});
app.get("/students/:data", async (req, res) => {

    try{
        const student = await Student.find({"instructor": "Dhaval"}).lean().exec();
        const student1 = await Student.find({"instructor": "Nrupul"}).lean().exec();
        const student2 = await Student.find({"instructor": "Aman"}).lean().exec();

        let num = Object.keys(student).length;
        let num1 = Object.keys(student1).length;
        let num2 = Object.keys(student2).length;
        
        let arr = {
            Dhaval: num,
            Nrupul: num1,
            Aman: num2,    
        }

        let name;
        let temp = 0;
        for(key in arr) {
            if(arr[key] > temp){
                temp = arr[key];
                name = key;
            }
        }
        res.send({"instructor teaching most students": name});
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