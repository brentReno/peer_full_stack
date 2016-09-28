// require technologies
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');

// declare port
var port = process.env.PORT || 3030;

// use static folder
app.use(express.static('public'));


//link server to db
var mongoURI = 'mongodb://localhost:27017/shelf';
var MongoDB = mongoose.connect(mongoURI).connection;

// spin up server
app.listen(port, function() {
  console.log('server spinning on', port);
}); // end app.listen

// base url
app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end base url

//get items from shelf
app.get('/shelf', function(req,res){
  console.log(' hit the shelf get route');
  res.sendStatus(200);
});//end shelf get
