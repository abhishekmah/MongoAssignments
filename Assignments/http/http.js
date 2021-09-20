const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function(req, res) {

    res.send("Welcome to Home page");
})

app.get("/users", function(req, res) {
    
    const data = [
        {    
            "id": 1001,
            "first_name": "Test First Name",
            "last_name": "Test Last Name",
            "email": "ydalesco0@test.com",
            "gender": "Genderfluid",
            "ip_address": "164.215.194.36",
            "age": 65
        },
        {    
            "id": 1002,
            "first_name": "Test First Name",
            "last_name": "Test Last Name",
            "email": "ydalesco0@test.com",
            "gender": "Genderfluid",
            "ip_address": "164.215.194.36",
            "age": 70
        }
    ]
    res.send(data);
})

app.post("/users", function(req, res) {

    const body = req.body;
    res.send(body);
})

app.patch("/users/:id", function(req, res) {

    const user = findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(user);
})

app.delete("/users/:id", function(req, res) {

    const body = req.body;
    res.json(body);
})

app.listen(2345, () => {
    console.log("Listening to port")
})