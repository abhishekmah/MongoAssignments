const express = require("express")

const Admin = require("../models/admins.model")

const crudController = require("./crud.controller")
const transporter = require("../config/mail");

const router = express.Router();

router.patch("/:id", crudController.updateOne(Admin))
router.delete("/:id", crudController.deleteOne(Admin))


router.post("", async(req, res) => {

    const admin = await Admin.create(req.body);
    const admins = await Admin.find().lean().exec();
    admins.map((el) => {
        return transporter.sendMail({
            from: '"Abhishek Mahato 👻" <mahato@gmail.com>', // sender address
            to: el.email,// list of receivers
            subject: `${req.body.first_name} ${req.body.last_name} has registered successfully`, // Subject line
            text: `Hi ${el.first_name}, welcome him`, // plain text body
            html: "<b>Hello world?</b>", // html body
        })
    })

    return res.status(201).json({ admin })
})

router.get("", async (req, res) => {

    const admins = await Admin.find().lean().exec();
    return res.status(200).json({ admins })
})


module.exports = router;