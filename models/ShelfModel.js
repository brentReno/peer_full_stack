var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shelfSchema = new Schema({
  description: {type: String, required: true},
  placer: {type: String, required: true},
  image: {type: String, default: 'http://tinyurl.com/hj5mqd5'}
});

var ShelfModel = mongoose.model('shelfobjects', shelfSchema);
module.exports = ShelfModel;
