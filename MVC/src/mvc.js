const express = require('express')

const connect = require("./config/db")

const app = express();
app.use(express.json());

const evaluationController = require("./controllers/evals.controller")
const userController = require("./controllers/users.controller")
const studentController = require("./controllers/students.controller")

  app.use("/users", userController);
  app.use("/evaluations", evaluationController);
  app.use("/students", studentController);

app.listen(2345, async () => {
    await connect()
    console.log('listening to port no 2345');
})