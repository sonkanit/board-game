'use strict';

var Entity = require('./Entity');

function Creature() {
  Entity.call(this);
}

// Inheritance
Creature.prototype = Object.create(Entity.prototype);

Creature.prototype.hp = null;

Creature.prototype.power = null;

// Override
Creature.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['hp', 'power']);
};

module.exports = Creature;
