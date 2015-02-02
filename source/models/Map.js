'use strict';

var Entity = require('./Entity');

function Map() {
  Entity.call(this);
  // TODO: WITHOUT THIS WILL CAUSE BUG IN REACT
  this.cells = [];
}

// Inheritance
Map.prototype = Object.create(Entity.prototype);

Map.prototype.cells = [];

Map.prototype.skin = null;

// Override
Map.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['cells', 'skin']);
};

module.exports = Map;
