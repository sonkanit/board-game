'use strict';

var Player = require('../../models/Player');
var Token = require('../../models/Token');

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

PlayerServer.prototype.walk = function (cell, environment) {
  if (validateWalk()) {
    this.token = null;
    this.cell = environment.getCell(cell);
    this.cell.action(this);
    return this.cell;
  } else {
    throw 'Invalid walk path!';
  }
};

module.exports = PlayerServer;
