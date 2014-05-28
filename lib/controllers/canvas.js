'use strict';

var mongoose = require('mongoose'),
    Canvas = mongoose.model('Canvas');

exports.showAll = function(req, res) {
  var userId = req.user._id;
  return Canvas.find({ owner_id: userId.toString() }, 
    function (err, cards) {
    if (!err) {
      return res.json(cards);
    } else {
      return res.send(err);
    }
  });
  /*
  return Canvas.find({}, 
    function (err, cards) {
    if (!err) {
      return res.json(cards);
    } else {
      return res.send(err);
    }
  });
*/
/*
  return Canvas
    .find({})
    .populate('template_id')
    .exec(function (err, cards) {
      if (!err) {
        return res.json(cards);
      } else {
        return res.send(err);
      }
  });
*/
};
