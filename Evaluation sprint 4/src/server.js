const express = require("express");

const connect = require("./config/db");

const app = express();
app.use(express.json());

const userController = require("./controller/user.controller")

app.use("/users", userController);

app.listen(2345, async() => {
    await connect()
    console.log("listening to port 2345");
})