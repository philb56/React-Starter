// 'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  skills: String,
  email: String
});

module.exports = mongoose.model('User', userSchema)
