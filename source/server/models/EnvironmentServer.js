'use strict';

var Environment = require('../../models/Environment');

var CellServer = require('./CellServer');

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

EnvironmentServer.prototype.getCell = function (cell) {
  // TODO: search for cell in maps
  var _cell = new CellServer();
  _cell.update(cell);
  return _cell;
};

// Override
EnvironmentServer.prototype.publicize = function (player) {
  return {
    players: this.players.filter(function (_player) {
      return _player !== player;
    }).map(function (_player) {
      return _player.publicize();
    }),
    maps: this.maps
  };
};

module.exports = EnvironmentServer;
