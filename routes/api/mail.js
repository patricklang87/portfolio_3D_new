const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    }
});

// @route POST /api/mail
// @desc Send mail to my inbox
// @access Public
router.post('/', (req, res, next) => {
    console.log('endpoint reached', req.body.text);
    const { business, name, email, text } = req.body;

    const subjectLine = `Message from: ${name} (${email}) at ${business}`;

    let mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: subjectLine,
        text: text
    }
    
    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Sent from mail route endpoint");
            res.status(200).send("Success")
        }
    });
});

module.exports = router;