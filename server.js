// Express
var express = require('express');
var app = express();

// Path
var path = require('path');

// BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Mongo
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/js_project';

// Controllers
app.use(require('./controllers'));

// Static files location.
app.use(express.static('client/build'));

// Bind/ listen for connections on host/ port.
app.listen(3000, function(){
  console.log('App is running on port ' + this.address().port);
}); 