'use strict';

var Equipment = require('./Equipment');

function Armor() {
  Equipment.call(this);
}

// Inheritance
Armor.prototype = Object.create(Equipment.prototype);

Armor.prototype.defence = null;

module.exports = Armor;
