const express = require('express')

const connect = require("./config/db1")

const app = express();
app.use(express.json());

const userController = require("./controllers/users1.controller")
const adminController = require("./controllers/admins.controller")

  app.use("/users", userController);
  app.use("/admins", adminController);

app.listen(2345, async () => {
    await connect()
    console.log('listening to port no 2345');
})