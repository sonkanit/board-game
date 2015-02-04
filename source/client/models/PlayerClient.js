'use strict';

var Player = require('../../models/Player');
var CellClient = require('./CellClient');
var TokenClient = require('./TokenClient');
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
  this.online = player.online;

  if (player.token) {
    if (!(this.token instanceof TokenClient)) {
      this.token = new TokenClient();
    }
    this.token.update(player.token);
  } else {
    this.token = null;
  }

  if (player.cell) {
    if (!(this.cell instanceof CellClient)) {
      this.cell = new CellClient();
    }
    this.cell.update(player.cell);
  } else {
    this.cell = null;
  }
};

module.exports = PlayerClient;
