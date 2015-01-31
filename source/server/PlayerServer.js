'use strict';

var Player = require('../model/Player');
var Token = require('../model/Token');
var Position = require('../model/Position');

var validateWalk = function () {
  return true;
};

function PlayerServer(id) {
  Player.call(this, id);
}

// Inheritance
PlayerServer.prototype = Object.create(Player.prototype);

PlayerServer.prototype.roll = function () {
  if (this.coins > 0) {
    this.coins--;
    this.token = new Token();
    return this.token;
  } else {
    throw 'Not Enough coins!'
  }
};

PlayerServer.prototype.walk = function (position) {
  if (validateWalk()) {
    this.token = null;
    this.position = position;
  }
};

module.exports = PlayerServer;
