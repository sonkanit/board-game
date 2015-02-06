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

Item.prototype.update = function (item) {
  this.id = item.id;
  this.name = item.name;
  this.description = item.description;
  this.thumbnail = item.thumbnail;
};

module.exports = Item;
