const express = require('express');
// const parseurl = require('parseurl');
const bodyParser = require('body-parser');
// const path = require('path');
// const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const User = require('./models/user.js')
const app = express();
const url = process.env.MONGOLAB_URI;
//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
});
//==========================//
//====GET ALL SIGNATURES===//
app.get('/api/users', function(req, res) {
  User.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })
//==========================//
//====POST NEW SIGNATURE===//
app.post('/api/users', function(req, res) {
  User.create({
    name: req.body.Name,
    skills: req.body.Skills,
    email: req.body.Email,
  }).then(user => {
    res.json(user)
  });
});

//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});
//==========================//
app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');
