'use strict';

var mongoose = require('mongoose'),
    Card = require('./card'),
    Schema = mongoose.Schema;
    
var CanvasSchema = new Schema({
  title: String,
  pitch: String,
  template_id: {type: Schema.Types.ObjectId, ref: 'Template'},
  owner_id: {type: Schema.Types.ObjectId, ref: 'User'},
  areas:
  [
    {
      area_id: {type: Schema.Types.ObjectId, ref: 'Area'},
      cards: [Card]
    }
  ]
});

CanvasSchema
  .path('title')
  .validate(function (title) {
    if (title) {
      return (title !== '');
    }
    return false;
  }, 'Title is mandatory');

CanvasSchema
  .path('owner_id')
  .validate(function (owner_id) {
    return owner_id;
  }, 'Owner id is mandatory');


module.exports = mongoose.model('Canvas', CanvasSchema);
