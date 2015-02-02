'use strict';

var Entity = require('./Entity');

function Environment() {
  // TODO: WITHOUT THIS WILL CAUSE BUG IN REACT
  Entity.call(this);
  this.players = [];
}

// Inheritance
Environment.prototype = Object.create(Entity.prototype);

Environment.prototype.players = [];

// Override
Environment.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['players']);
};

module.exports = Environment;
