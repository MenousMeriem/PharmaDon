"use strict";
const nodemailer = require("nodemailer");

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
    let info = await transporter.sendMail({
    from: mail.toString(), // sender address
    to: process.env.SMTP_Mail, // list of receivers
    subject:"Réclamation", // Subject line
    text:``, // plain text body
    })

