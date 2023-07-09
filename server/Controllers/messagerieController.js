const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
require('dotenv').config()

exports.envoyerReclamation = expressAsyncHandler(async (req, res) => {
    const {mail, nom, text } = req.body
    const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_Mail,
        pass: process.env.SMTP_Pass
        }
    });
    // send mail with defined transport object
    await transporter.sendMail({
    from: process.env.SMTP_Mail, // sender address
    to: process.env.SMTP_Mail, // list of receivers
    subject:"Réclamation from: "+mail, // Subject line
    text: `Nom: ${nom}\nContenue: ${text}`, // plain text body
    })
    res.send("Reclamation envoyé avec succes ! ")
})