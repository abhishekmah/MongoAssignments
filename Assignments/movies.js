const express = require("express");
const mongoose = require("mongoose");


const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/theatre", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
};

const app = express();

app.use(express.json());

//first step create schema
const movieSchema = new mongoose.Schema({
    movie_name: { type:String, required:true},
    movie_genre: { type:String, required:true},
    production_year: { type:String, required:true},
    budget: { type:Number, required:true},
},
{
    versionKey: false,
    timestamps: true
})

const Movie = mongoose.model("movie", movieSchema)


app.get("/movies", async (req, res) => {

    try{
        const movie = await Movie.find({budget: {$gt: 11000}}).lean().exec();

        res.send(movie);
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
    }
});

app.post("/movies", async (req, res) => {

    try{
        const movie = await Movie.create(req.body);

        res.status(201).json({movie});
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
    }
});

app.patch("/movies/:id", async (req, res) => {

    try{
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.status(200).json({movie});
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
    }
});
app.get("/movies/:id", async (req, res) => {

    try{
        const movie = await Movie.findById(req.params.id).lean().exec();

        res.status(200).json({movie});
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
    }
});

app.delete("/movies/:id", async (req, res) => {

    try{
        const movie = await Movie.findByIdAndDelete(req.params.id);

        res.status(200).json({movie});
    }
    catch(err){
        res.status(400).json({ status: "error", message: err.message})
    }
});


app.listen(2345, async function() {

    await connect();
    console.log("listening to port 2345")
})