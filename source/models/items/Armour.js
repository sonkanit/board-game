'use strict';

var Equipment = require('./Equipment');

function Armour() {
  Equipment.call(this);
}

// Inheritance
Armour.prototype = Object.create(Equipment.prototype);

Armour.prototype.defence = null;

module.exports = Weapon;
