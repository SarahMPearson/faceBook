/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    User      = require('../../app/models/user'),
    dbConnect = require('../../app/lib/mongodb'),
    cp        = require('child_process'),
    db        = 'template-test';

describe('User', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new User object', function(){
      var u = new User();
      expect(u).to.be.instanceof(User);
    });
  });

  /* describe('#save', function(){
    it('should save a user', function(done){
      var userId = Mongo.ObjectID('000000000000000000000001'),
      Goal.findByGoalIdAndUserId(goalId, userId, function(err, goal){
        goal.name = 'stuff';
        goal.save(function(err, count){
          expect(count).to.equal(1);
          done();
        });
      });
    });
  });

  describe('#update', function(){
    it('should update profile', function(){
    });
  }); */
}); // last bracket


