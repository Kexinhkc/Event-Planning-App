var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {OAuth2Client} = require('google-auth-library');
var mysql = require('mysql');
const jwt_decode = require('jwt-decode');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

var dbConnectionPool = mysql.createPool({ host: 'localhost', database: 'eventPlanning'});
app.use(function(req,res,next){
  req.pool = dbConnectionPool;
  next();
});

let token = req.get('token');
var decodedHeader = jwt_decode(token, { header: true });
console.log(decodedHeader);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
