'use strict';

var Item = require('./Item');

function Consumable() {
  Item.call(this);
  this.type = 'Consumable';
}

// Inheritance
Consumable.prototype = Object.create(Item.prototype);

// TO BE CHANGE TO effect
Consumable.prototype.hp = null;

Consumable.prototype.update = function (consumable) {
  Item.prototype.update.call(this, consumable);
  this.hp = consumable.hp;
};

module.exports = Consumable;
