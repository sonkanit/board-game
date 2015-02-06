'use strict';

var Weapon = require('../../../models/items/Weapon');

function WeaponServer() {
  Weapon.call(this);
}

// Inheritance
WeaponServer.prototype = Object.create(Weapon.prototype);

WeaponServer.prototype.execute = function (player) {
  // TODO: put the logic here
  return true;
};

module.exports = WeaponServer;
