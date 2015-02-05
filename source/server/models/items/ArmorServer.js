'use strict';

var Armor = require('../../models/Armor');

function ArmorServer() {
  Armor.call(this);
}

// Inheritance
ArmorServer.prototype = Object.create(Armor.prototype);

ArmorServer.prototype.execute = function (player) {
  // TODO: put the logic here
  return true;
};

module.exports = ArmorServer;
