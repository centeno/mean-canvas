'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing'),
  Canvas = mongoose.model('Canvas'),
  Template = mongoose.model('Template'),
  user_id = mongoose.Types.ObjectId();

/**
 * Populate database with sample application data
 */

Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  });
});

User.find({}).remove(function() {
  User.create({
    _id: user_id,
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  });
});

Template.find({}).remove(function() {
  Template.create({
    title: 'Business Canvas',
    colCount: 10,
    rowCount: 3,
    areas: [ 
      { title: 'Key Partnershipt', colCount: 2, rowCount: 2 },
      { title: 'Key Activities', colCount: 2, rowCount: 1 },
      { title: 'Key Resources', colCount: 2, rowCount: 1 },
      { title: 'Value Propositions', colCount: 2, rowCount: 2 },
      { title: 'Channels', colCount: 2, rowCount: 1 },
      { title: 'Customer Relationthips', colCount: 2, rowCount: 1 },
      { title: 'Customer Segments', colCount: 2, rowCount: 2 },
      { title: 'Revenue', colCount: 5, rowCount: 1 },
      { title: 'Expenses', colCount: 5, rowCount: 1 }
    ]
  }, function(err, bizTemplate) {
    Canvas.find({}).remove(function() {
      Canvas.create({
        title: 'Sample Canvas',
        pitch: 'Sample pitch',
        owner_id: user_id,
        template_id: bizTemplate._id,
        areas: bizTemplate.areas.map(function(a) {
          return { template_area_id: a._id, cards: ['1','2'].map(function(c) { return { title: 'Sample ' + a.title + ' card #' + c }; }) };
        })
      });
    });

  });
});