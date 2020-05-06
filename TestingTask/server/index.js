'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1>Here is your home page</h1>');
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header ('Access-Control-Allow-Headers', 'Content-Type')
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
  
app.use('/api', require('./routes/api'));

app.listen(3000, () => {
    console.log('The server is listening on http://localhost:3000');
})