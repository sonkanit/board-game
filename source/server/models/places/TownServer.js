'use strict';

var Town = require('../../../models/places/Town');

function TownServer() {
  Town.call(this);
}

// Inheritance
TownServer.prototype = Object.create(Town.prototype);

TownServer.prototype.execute = function (player) {
  // TODO: put the logic here
  return true;
};

module.exports = TownServer;
