const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "fdc0e8e45202e7", // generated ethereal user
      pass: "040ecca09c5977", // generated ethereal password
    },
  });