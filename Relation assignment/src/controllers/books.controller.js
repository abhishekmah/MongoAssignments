const express = require("express")

const Book = require("../models/books.model")

const crudController = require("./crud.controller")
const router = express.Router();

router.post("", crudController.post(Book))
router.patch("/:id", crudController.updateOne(Book))
router.delete("/:id", crudController.deleteOne(Book))

router.get("", async (req, res) => {

    // const books = await Book.find({"check": true}).lean().exec();
    const books = await Book.find().lean().exec();
    return res.status(200).json({ books })
})

router.get("/authors/:id", async (req, res) => {

    const books = await Book.find({ "authorId": req.params.id }).populate("authorId").lean().exec();
    return res.status(200).json({ books })
})

router.get("/sections/:id", async (req, res) => {

    const books = await Book.find({ "sectionId": req.params.id }).populate("sectionId").lean().exec();
    return res.status(200).json({ books })
})

router.get("/notChecked/:id", async (req, res) => {

    const books = await Book.find({$and: [ { "sectionId": req.params.id}, {"check": false} ]}).populate("sectionId").lean().exec();
    return res.status(200).json({ books })
})

router.get("/:id/:id1", async (req, res) => {

    const books = await Book.find( {$and: [{ "sectionId": req.params.id }, { "authorId": req.params.id1}] }).populate("authorId").lean().exec();
    return res.status(200).json({ books })
}) 

module.exports = router;