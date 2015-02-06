'use strict';

var Item = require('./Item');

function Consumable() {
  Item.call(this);
}

// Inheritance
Consumable.prototype = Object.create(Item.prototype);

// TO BE CHANGE TO effect
Consumable.prototype.hp = null;

module.exports = Consumable;
