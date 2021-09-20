const express = require("express")

const Evaluation = require("../models/evals.model")
const crudController = require("./crud.controller")

const router = express.Router();

//Refactor////////////////////////////////

router.post("", crudController.post(Evaluation))
router.get("", crudController.get(Evaluation))
router.get("/:id", crudController.getOne(Evaluation))
router.patch("/:id", crudController.updateOne(Evaluation))
router.delete("/:id", crudController.deleteOne(Evaluation))


module.exports = router;