const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

// @route POST /api/mail
// @desc Send mail to my inbox
// @access Public
router.post('/', (req, res, next) => {
    console.log('endpoint reached');
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
            console.log("Error " + err);
        } else {
            console.log("Sent from mail route endpoint");
            res.status(200).send("Success")
        }
    });
});

module.exports = router;