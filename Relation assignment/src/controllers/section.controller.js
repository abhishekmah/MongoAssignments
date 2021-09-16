const express = require("express")

const Section = require("../models/section.model")

const router = express.Router();


router.get('', async (req, res) => {

    const sections = await Section.find().lean().exec();

    return res.status(200).json({ sections })
})

router.post('', async (req, res) => {
    const section = await Section.create(req.body)

    return res.status(201).json({ section })
})

router.get('/:id', async (req, res) => {
    const section = await Section.findById(req.params.id).lean().exec();
    return res.status(200).json({ section })
})
router.delete('/:id', async (req, res) => {
    const section = await Section.findByIdAndDelete(req.params.id);
    return res.status(200).json({ section })
})

module.exports = router;