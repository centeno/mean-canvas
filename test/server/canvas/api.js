/*
'use strict';

var 
    requireHelper = require('../require_helper'),
    //app = requireHelper('server.js'),
    // app = require('../../server'),
    app = require('../../../lib/server'),
    mongoose = require('mongoose'),    
    User = mongoose.model('User'),
    //request = require('superagent'),
    request = require('supertest'),
    should = require('should');

//var server = request.agent('http://localhost:9000');
describe('GET /api/canvas', function(){
  it('should not return canvases for anonymous users', function(done){
    request(app)
      .get('/api/canvas')
      .expect(401)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      })
  });
});

describe('GET /api/canvas', function(){
    //debugger;
    it('should not return a canvas for an anonymous user', function(done){
      server
          .get('/api/canvas')                       
          .expect(401)
          .end(function(err, res){
            done();
          });
      });

    //it('login', loginUser());
    it('login', loginUser({ email: 'test@test.com', password: 'test' }));
    it('should return a canvas for a logged user', function(done){
      //loginUser({ email: 'test@test.com', password: 'test' });
      server
          .get('/api/canvas')                       
          .expect(200)
          .end(function(err, res){
              if (err) return done(err);
              done()
          });
      });
});


function loginUser(usr) {
    return function(done) {
        server
            .post('/api/session')
            //.send({ email: 'test@test.com', password: 'test' })
            .send(usr)
            .expect(200)
            .end(onResponse);

        function onResponse(err, res) {
           if (err) return done(err);
           return done();
        }
    };
};
*/