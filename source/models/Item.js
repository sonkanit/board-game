'use strict';

var Entity = require('./Entity');

// Scroll
// Equipment
// Consumable
// Misc
function Item() {
  Entity.call(this);
}

// Inheritance
Item.prototype = Object.create(Entity.prototype);

module.exports = Item;
