const mongoose = require('mongoose')
const config = require('../config').db;
const connString = config.connString;

mongoose.connect(connString, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected', function () {
  console.log('Mongoose default connection open to ' + connString);
});

db.once('open', function() {
  console.log('we are connected!');
});


db.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

db.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

module.exports = mongoose;