'use strict';

var Environment = require('../../models/Environment');

var PlayerClient = require('./PlayerClient');

function EnvironmentClient() {
  Environment.call(this);
}

// Inheritance
EnvironmentClient.prototype = Object.create(Environment.prototype);

EnvironmentClient.prototype.update = function (enviroment) {
  var players = enviroment.players;

  // TODO: update instead of re-create
  this.players = players.map(function (_player) {
    var player = new PlayerClient();
    player.update(_player);
    return player;
  });
};

module.exports = EnvironmentClient;
