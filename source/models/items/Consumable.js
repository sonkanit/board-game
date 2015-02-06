'use strict';

var Item = require('./Item');
var Effect = require('../Effect');

var enitityUpdate = require('../../utilities/enitityUpdate');

function Consumable() {
  Item.call(this);
  this.type = 'Consumable';
}

// Inheritance
Consumable.prototype = Object.create(Item.prototype);

Consumable.prototype.effect = null;

Consumable.prototype.update = function (consumable) {
  Item.prototype.update.call(this, consumable);
  enitityUpdate(this, 'effect', consumable.effect, Effect);
};

module.exports = Consumable;
