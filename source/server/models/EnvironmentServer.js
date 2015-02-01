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

EnvironmentServer.prototype.getClientData = function () {
  return this;
};

module.exports = EnvironmentServer;
