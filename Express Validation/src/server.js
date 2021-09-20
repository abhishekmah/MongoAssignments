const express = require("express")

const connect = require("./config/db")

const userControlller = require("./controllers/user.controller")

const app = express()
app.use(express.json())

app.use("/users", userControlller)

const start = async () => {
    await connect();

    app.listen(2245, () => {
        console.log("listening to port 2245")
    })
}

module.exports = start