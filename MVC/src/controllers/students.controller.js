const express = require("express")

const Student = require("../models/students.model")

const crudController = require("./crud.controller")
const router = express.Router();

router.post("", crudController.post(Student))
router.patch("/:id", crudController.updateOne(Student))
router.delete("/:id", crudController.deleteOne(Student))

router.get("", async (req, res) => {

    const students = await Student.find().lean().exec();
    return res.status(200).json({ students })
})

router.get("/:id", async (req, res) => {

    const students = await Student.find({ "evaluationId": req.params.id }).populate("evaluationId").lean().exec();
    return res.status(200).json({ students })
})

router.get("/marks/:id", async (req, res) => {

    const students = await Student.find({ "evaluationId": req.params.id }).sort({ marks: -1}).limit(1).populate("sectionId").lean().exec();
    return res.status(200).json({ students })
})


module.exports = router;