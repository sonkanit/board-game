'use strict';

var Token = require('./Token');
var Position = require('./Position');
var randomNumber = require('../utilities/randomNumber');

function Player(id) {
  this.id = id;
  this.coins = randomNumber(10);
  this.token = null;
  this.position = new Position(randomNumber(100), randomNumber(100));
}

Player.prototype.id = null;

Player.prototype.coins = null;

Player.prototype.token = null;

Player.prototype.position = null;

Player.prototype.roll = function () {
  if (this.coins > 0) {
    this.coins--;
    this.token = new Token();
    return this.token;
  } else {
    throw 'Not Enough coins!'
  }
};

module.exports = Player;
