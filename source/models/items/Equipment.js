'use strict';

var Item = require('./Item');
var Effect = require('../Effect');

var enitityUpdate = require('../../utilities/enitityUpdate');

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
  enitityUpdate(this, 'effect', equipment.effect, Effect);
};

module.exports = Equipment;
