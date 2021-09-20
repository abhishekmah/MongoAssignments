const express = require('express')

const connect = require("./config/db")

const app = express();
app.use(express.json());

const sectionController = require("./controllers/section.controller")
const authorController = require("./controllers/author.controller")
const bookController = require("./controllers/books.controller")

  app.use("/authors", authorController);
  app.use("/sections", sectionController);
  app.use("/books", bookController);

app.listen(2345, async () => {
    await connect()
    console.log('listening to port no 2345');
})