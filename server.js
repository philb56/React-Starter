const express = require('express');
// const parseurl = require('parseurl');
const bodyParser = require('body-parser');
// const path = require('path');
// const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const User = require('./models/user.js')
const app = express();
const url = 'pbugden:123@ds259268.mlab.com:59268/users';
