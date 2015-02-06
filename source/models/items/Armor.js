'use strict';

var Equipment = require('./Equipment');

function Armor() {
  Equipment.call(this);
}

// Inheritance
Armor.prototype = Object.create(Equipment.prototype);

Armor.prototype.defence = null;

Armor.prototype.update = function (armor) {
  Equipment.prototype.update.call(this, armor);
  this.defence = armor.defence;
};

module.exports = Armor;
