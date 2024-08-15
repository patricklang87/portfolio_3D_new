//https://www.youtube.com/watch?v=R54neaLznFA&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=3
//used to set up structure with client embedded in server file, part three to add the proxy in the package.json in the client folder
//use part 8 for help setting up the heroku page
//nodemailer tutorial: https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/

const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const mail = require('./routes/api/mail');
const path = require('path');

const app = express();

//body-parsing
app.use(express.json());

//Use Routes
app.use('/api/mail', mail);

//Serve static assets if we are in production
if (process.env.NODE_ENV === 'production') {
    // Set a static folder (serve the client folder)
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));


