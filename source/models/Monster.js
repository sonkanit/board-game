'use strict';

var Creature = require('./Creature');

function Monster() {
  Creature.call(this);
}

// Inheritance
Monster.prototype = Object.create(Creature.prototype);

module.exports = Monster;
