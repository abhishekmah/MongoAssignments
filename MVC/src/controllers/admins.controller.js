const express = require("express")

const Admin = require("../models/admins.model")

const crudController = require("./crud.controller")
// const transporter = require("../config/mail");

const router = express.Router();

router.patch("/:id", crudController.updateOne(Admin))
router.delete("/:id", crudController.deleteOne(Admin))


router.post("", async(req, res) => {

    const admin = await Admin.create(req.body);
    const admins = await Admin.find().lean().exec();
    var item;
    admins.forEach(item)
    console.log(item);
    
    
    // await transporter.sendMail({
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: "bar@example.com, baz@example.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello Abhishek here?</b>", // html body
    // });

    return res.status(201).json({ admin })
})

router.get("", async (req, res) => {

    const admins = await Admin.find().lean().exec();
    return res.status(200).json({ admins })
})


module.exports = router;