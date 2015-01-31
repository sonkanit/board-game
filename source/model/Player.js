'use strict';

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

module.exports = Player;
