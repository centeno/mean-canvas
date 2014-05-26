'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var CardSchema = new Schema({
  title: String,
  canvas_id: Schema.ObjectId
});

CardSchema
  .path('title')
  .validate(function (title) {
    if (title) {
      return (title !== '');
    }
    return false;
  }, 'Title is mandatory');

CardSchema
  .path('canvas_id')
  .validate(function (canvas_id) {
    return canvas_id;
  }, 'Canvas id is mandatory');


module.exports = mongoose.model('Card', CardSchema);
