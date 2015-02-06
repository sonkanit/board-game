'use strict';

var Treasure = require('../../../models/places/Treasure');

function TreasureServer() {
  Treasure.call(this);
}

// Inheritance
TreasureServer.prototype = Object.create(Treasure.prototype);

TreasureServer.prototype.execute = function (player) {
  // TODO: put the logic here
  return true;
};

module.exports = TreasureServer;
