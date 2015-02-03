'use strict';

var Equipment = require('./Equipment');

function Weapon() {
  Equipment.call(this);
}

// Inheritance
Weapon.prototype = Object.create(Equipment.prototype);

Weapon.prototype.attack = null;

module.exports = Weapon;
