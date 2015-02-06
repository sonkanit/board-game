'use strict';

var Item = require('./Item');

function Equipment() {
  Item.call(this);
}

// Inheritance
Equipment.prototype = Object.create(Item.prototype);

Equipment.prototype.lifespan = null;

Equipment.prototype.effect = null;

Equipment.prototype.update = function (equipment) {
  Item.prototype.update.call(this, equipment);
  this.lifespan = equipment.lifespan;
  this.effect = equipment.effect;
};

module.exports = Equipment;
