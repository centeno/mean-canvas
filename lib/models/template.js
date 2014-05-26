'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TemplateSchema = new Schema({
  title: String,
  colCount: Number,
  rowCount: Number,
  areas: [{
    title: String,
    colCount: Number,
    rowCount: Number
  }]
});

TemplateSchema
  .path('title')
  .validate(function (title) {
    if (title) {
      return (title !== '');
    }
    return false;
  }, 'Title is mandatory');

module.exports = mongoose.model('Template', TemplateSchema);