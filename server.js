//https://www.youtube.com/watch?v=R54neaLznFA&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=3
//used to set up structure with client embedded in server file, part three to add the proxy in the package.json in the client folder


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


app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 4000
;
app.listen(port, () => console.log(`Listening on port ${port}`));


