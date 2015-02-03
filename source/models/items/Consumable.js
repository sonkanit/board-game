'use strict';

var Item = require('./Item');

function Consumable() {
  Item.call(this);
}

// Inheritance
Consumable.prototype = Object.create(Item.prototype);

Consumable.prototype.effect = null;

module.exports = Consumable;
