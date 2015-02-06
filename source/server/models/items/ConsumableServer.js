'use strict';

var Consumable = require('../../../models/items/Consumable');

function ConsumableServer() {
  Consumable.call(this);
}

// Inheritance
ConsumableServer.prototype = Object.create(Consumable.prototype);

ConsumableServer.prototype.execute = function (player) {
  // TODO: put the logic here
  return true;
};

module.exports = ConsumableServer;
