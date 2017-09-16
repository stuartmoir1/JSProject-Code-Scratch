// Express
var express = require('express');
var mainRouter = express.Router();

// MongoDB
var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017/main';

// RESTful routes.

// Index
mainRouter.get('/main', function(req, res){
  MongoClient.connect(dbUrl, function(err, db){
    if (err){console.log('Unable to connect to MongoDB...'); return;}
    var collection = db.collection('data');
    collection.find({}).toArray(function(err, docs){
      res.json(docs); // Send response (array) to BodyParser.
      db.close();
    });
  });
});

// Show

// Edit

// Update

// Create

// Delete

module.exports = mainRouter;