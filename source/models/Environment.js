'use strict';

var Entity = require('./Entity');

function Environment() {
  // TODO: WITHOUT THIS WILL CAUSE BUG IN REACT
  Entity.call(this);
  this.players = [];
  this.maps = [];
}

// Inheritance
Environment.prototype = Object.create(Entity.prototype);

Environment.prototype.players = [];

Environment.prototype.maps = [];

Environment.prototype.items = [];

// Override
Environment.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['players', 'maps', 'items']);
};

module.exports = Environment;
