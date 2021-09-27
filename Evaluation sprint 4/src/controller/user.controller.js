const express = require("express");

const User = require("../model/user.model");
const upload = require("../middlewares/file-upload")

const router = express.Router();

router.get("", async(req,res) => {
    const user = await User.find().lean().exec();
    return res.status(200).json({user})
})

router.post('/single', upload.single("productImages"), aync(req, res) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        roles: req.body.roles,
        profile_photo_url: filePaths,
    }) 
    return res.status(201).send( {user} )
})