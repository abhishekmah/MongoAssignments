const express = require("express")

const Author = require("../models/author.model")

const router = express.Router();

router.post('', async (req, res) => {
    const author = await Author.create(req.body);
    return res.status(201).json({ author })
})

router.get('', async (req, res) => {
    const authors = await Author.find().lean().exec();
    return res.status(200).json({ authors })
})

router.get('/:id', async (req, res) => {
    const author = await Author.findById(req.params.id).lean().exec();
    return res.status(200).json({ author })
})
router.patch('/:id', async (req, res) => {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(200).json({ author })
})
router.delete('/:id', async (req, res) => {
    const author = await Author.findByIdAndDelete(req.params.id);
    return res.status(200).json({ author })
})

module.exports = router;