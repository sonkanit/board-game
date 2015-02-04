'use strict';

var Player = require('../../models/Player');
var Token = require('../../models/Token');
var Position = require('../../models/Position');

var Chance = require('chance');
var chance = new Chance();

var validateWalk = function () {
  // TODO:
  return true;
};

function PlayerServer() {
  Player.call(this);
}

// Inheritance
PlayerServer.prototype = Object.create(Player.prototype);

PlayerServer.prototype.roll = function () {
  if (this.coins > 0) {
    this.coins--;
    this.token = new Token();
    this.token.id = chance.guid();
    this.token.walks = chance.d6();
    return this.token;
  } else {
    throw 'Not Enough coins!';
  }
};

PlayerServer.prototype.walk = function (cell) {
  if (validateWalk()) {
    this.token = null;
    this.cell = cell;
    return this.cell;
  } else {
    throw 'Invalid walk path!';
  }
};

module.exports = PlayerServer;
