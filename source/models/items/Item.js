'use strict';

var Entity = require('../Entity');

function Item() {
  Entity.call(this);
}

// Inheritance
Item.prototype = Object.create(Entity.prototype);

Item.prototype.name = null;

Item.prototype.description = null;

Item.prototype.thumbnail = null;

module.exports = Item;
