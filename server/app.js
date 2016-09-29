// require technologies
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
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
// Item model
var Shelf = require('../models/ShelfModel.js');
// base url
app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end base url

app.post('/addItem', function(req, res){
	console.log('in items post');
	console.log('req.body is', req.body);
	var item = req.body;
	var newItem = new Shelf({
		description: item.description,
		placer: item.placer,
		image: item.image
	});//
	newItem.save(function(err){
		if(err){
			console.log('err saving item', err);
			res.sendStatus(500);
		} else {
			console.log('item saved successfully');
			res.sendStatus(201);
		}
	}); //end newItem save
});//end app post

app.get('/getItem', function(req, res){
	console.log('in item get');
	Shelf.find({}, function(err, foundItems){
		if(err){
			console.log('error getting item');
			res.sendStatus(500);
		} else{
			console.log('succeeded in getting items');
			res.send(foundItems);
		}
	}); //end Item find
});//end get

app.delete('/deleteItem', urlencodedParser, function(req, res){
  console.log('hit remove item:', req.body);
  Shelf.findByIdAndRemove(req.body.id, function(err, results){
    if(err){
      console.log('error:', err);
    }else{
      console.log('successfully deleted item');
      res.send(200);
    }
  });
});
