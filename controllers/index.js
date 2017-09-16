// Express
var express = require('express');
var router = express.Router();

// Path
var path = require('path');

// RESTful routes location.
router.use('/api', require('./main'));

// Main route.
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

module.exports = router;