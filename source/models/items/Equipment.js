'use strict';

var Item = require('./Item');

function Equipment() {
  Item.call(this);
}

// Inheritance
Equipment.prototype = Object.create(Item.prototype);

Equipment.prototype.lifespan = null;

Equipment.prototype.effect = null;

module.exports = Equipment;
