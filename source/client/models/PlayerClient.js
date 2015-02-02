'use strict';

var Player = require('../../models/Player');
var TokenClient = require('./TokenClient');
var PositionClient = require('./PositionClient');
var stringFormat = require('../../utilities/stringFormat');

var Entity = require('../../models/Entity');

function PlayerClient() {
  Player.call(this);
}

// Inheritance
PlayerClient.prototype = Object.create(Player.prototype);

PlayerClient.prototype.toString = function () {
  return stringFormat('{0}', this.name);
};

PlayerClient.prototype.update = function (player) {
  this.id = player.id;
  this.name = player.name;
  this.coins = player.coins;

  if (player.token) {
    if (!(this.token instanceof TokenClient)) {
      this.token = new TokenClient();
    }
    this.token.update(player.token);
  } else {
    this.token = null;
  }

  if (player.position) {
    if (!(this.position instanceof PositionClient)) {
      this.position = new PositionClient();
    }
    this.position.update(player.position);
  } else {
    this.position = null;
  }
};

module.exports = PlayerClient;
