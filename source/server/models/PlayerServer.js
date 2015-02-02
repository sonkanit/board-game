'use strict';

var Player = require('../../models/Player');
var Token = require('../../models/Token');
var Position = require('../../models/Position');

// TODO: Remove this
var Chance = require('chance');
var chance = new Chance();

var validateWalk = function () {
  // TODO:
  return true;
};

function PlayerServer(id) {
  Player.call(this);

  // TODO: MOCKUP
  this.id = id;
  this.name = chance.name();
  this.coins = chance.integer({ min: 1, max: 20 });
  this.token = null;
  this.position = new Position(chance.integer({ min: 0, max: 100 }), chance.integer({ min: 0, max: 100 }));
}

// Inheritance
PlayerServer.prototype = Object.create(Player.prototype);

PlayerServer.prototype.roll = function () {
  if (this.coins > 0) {
    this.coins--;
    this.token = new Token();
    this.token.walks = chance.integer({ min: 1, max: 6 });
    return this.token;
  } else {
    throw 'Not Enough coins!';
  }
};

PlayerServer.prototype.walk = function (position) {
  if (validateWalk()) {
    this.token = null;
    this.position = position;
    return this.position;
  } else {
    throw 'Invalid walk path!';
  }
};

module.exports = PlayerServer;
