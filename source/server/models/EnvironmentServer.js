'use strict';

var Environment = require('../../models/Environment');

function EnvironmentServer() {
  Environment.call(this);
}

// Inheritance
EnvironmentServer.prototype = Object.create(Environment.prototype);

EnvironmentServer.prototype.addPlayer = function (player) {
  var index = this.players.indexOf(player);
  if (index === -1) {
    this.players.push(player);
  }
};

EnvironmentServer.prototype.removePlayer = function (player) {
  var index = this.players.indexOf(player);
  if (index !== -1) {
    this.players.splice(index, 1);
  }
};

// Override
EnvironmentServer.prototype.getPublicData = function (player) {
  return {
    players: this.players.filter(function (_player) {
      return _player !== player;
    }).map(function (_player) {
      return _player.getPublicData();
    })
  };
};

module.exports = EnvironmentServer;
