'use strict';

var Equipment = require('./Equipment');

function Weapon() {
  Equipment.call(this);
  this.type = 'Weapon';
}

// Inheritance
Weapon.prototype = Object.create(Equipment.prototype);

Weapon.prototype.attack = null;

Weapon.prototype.update = function (weapon) {
  Equipment.prototype.update.call(this, weapon);
  this.attack = weapon.attack;
};

module.exports = Weapon;
