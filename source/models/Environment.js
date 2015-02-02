'use strict';

var Entity = require('./Entity');

function Environment() {
  this.players = [];
}

// Inheritance
Environment.prototype = Object.create(Entity.prototype);

Environment.prototype.players = null;

module.exports = Environment;
