'use strict';

var Entity = require('./Entity');

// Empower/Ailment
function Effect() {
  Entity.call(this);
}

// Inheritance
Effect.prototype = Object.create(Entity.prototype);

Effect.prototype.name = null;

Effect.prototype.status = null;

Effect.prototype.value = null;

Effect.prototype.lifespan = null;

Effect.prototype.thumbnail = null;

module.exports = Effect;
