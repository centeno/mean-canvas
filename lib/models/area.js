'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AreaSchema = new Schema({
  title: String,
  colCount: Number,
  rowCount: Number,
});

AreaSchema
  .path('title')
  .validate(function (title) {
    if (title) {
      return (title !== '');
    }
    return false;
  }, 'Title is mandatory');

module.exports = mongoose.model('Area', AreaSchema);