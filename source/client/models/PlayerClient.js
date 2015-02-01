'use strict';

var Player = require('../../models/Player');
var TokenClient = require('./TokenClient');
var PositionClient = require('./PositionClient');
var stringFormat = require('../../utilities/stringFormat');

function PlayerClient() {
  Player.call(this);
}

// Inheritance
PlayerClient.prototype = Object.create(Player.prototype);

PlayerClient.prototype.toString = function () {
  return stringFormat('{0}', this.fullName);
};

PlayerClient.prototype.update = function (player) {
  this.id = player.id;
  this.coins = player.coins;

  if (player.token !== null) {
    if (!(this.token instanceof TokenClient)) {
      this.token = new TokenClient();
    }
    this.token.update(player.token);
  }

  if (player.position !== null) {
    if (!(this.position instanceof PositionClient)) {
      this.position = new PositionClient();
    }
    this.position.update(player.position);
  }
};

module.exports = PlayerClient;
