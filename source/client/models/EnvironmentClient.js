'use strict';

var Environment = require('../../models/Environment');

var PlayerClient = require('./PlayerClient');
var MapClient = require('./MapClient');

var findWithAttr = require('../../utilities/findWithAttr');

function EnvironmentClient() {
  Environment.call(this);

  // TODO: INVESTIGATE WHY this.logs = []; is not required here.
  // this.logs = [];
}

// Inheritance
EnvironmentClient.prototype = Object.create(Environment.prototype);

EnvironmentClient.prototype.logs = [];

EnvironmentClient.prototype.update = function (environment) {
  // TODO: update instead of re-create
  this.players = environment.players.map(function (_player) {
    var player = new PlayerClient();
    player.update(_player);
    return player;
  });

  // TODO: update instead of re-create
  this.maps = environment.maps.map(function (_map) {
    var map = new MapClient();
    map.update(_map);
    return map;
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
