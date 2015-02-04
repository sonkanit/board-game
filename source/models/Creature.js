'use strict';

var Entity = require('./Entity');

function Creature() {
  Entity.call(this);
}

// Inheritance
Creature.prototype = Object.create(Entity.prototype);

Creature.prototype.hp = null;

Creature.prototype.attack = null;

Creature.prototype.defence = null;

Creature.prototype.attackVary = null;

Creature.prototype.thumbnail = null;

// Override
Creature.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['hp', 'attack', 'defence', 'attackVary', 'thumbnail']);
};

module.exports = Creature;
