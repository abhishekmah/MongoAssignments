const express = require("express")
const { body, validationResult} = require('express-validator')

const router = express.Router()

const User = require("../models/user.model")

router.post("/",
    body("id").isLength({ min: 1 }).withMessage("Enter Id"),
    body("first_name").isLength({ min: 1 }).withMessage("Enter first_name"),
    body("last_name").isLength({ min: 1 }).withMessage("Enter last_name"),
    body("email").isEmail().withMessage("Enter e-mail"),
    body("age").isLength({ min: 1 }).withMessage("Enter age"),
    body("gender").isLength({ min: 1 }).withMessage("Enter Gender"),

    async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({data: errors.array()})
    }
    const user = await User.create(req.body)
    return res.status(201).json({data: user})
})

module.exports = router;

