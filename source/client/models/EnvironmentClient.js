'use strict';

var Environment = require('../../models/Environment');

var PlayerClient = require('./PlayerClient');

var findWithAttr = require('../../utilities/findWithAttr');

function EnvironmentClient() {
  Environment.call(this);
}

// Inheritance
EnvironmentClient.prototype = Object.create(Environment.prototype);

EnvironmentClient.prototype.logs = [];

EnvironmentClient.prototype.update = function (environment) {
  var players = environment.players;

  // TODO: update instead of re-create
  this.players = players.map(function (_player) {
    var player = new PlayerClient();
    player.update(_player);
    return player;
  });
};

EnvironmentClient.prototype.addPlayer = function (player) {
  var _player = new PlayerClient();
  _player.update(player);
  this.players.push(_player);
};

EnvironmentClient.prototype.removePlayer = function (player) {
  var idx = findWithAttr(this.players, 'id', player.id);
  if (idx > -1) {
    this.players.splice(idx, 1);
  }
};

EnvironmentClient.prototype.updatePlayer = function (player) {
  var idx = findWithAttr(this.players, 'id', player.id);
  if (idx > -1) {
    this.players[idx].update(player);
  }
};

module.exports = EnvironmentClient;
