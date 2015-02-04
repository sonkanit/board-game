'use strict';

var Entity = require('./Entity');

function Map() {
  Entity.call(this);
  // TODO: WITHOUT THIS WILL CAUSE BUG IN REACT
  this.cells = [];
  this.paths = [];
}

// Inheritance
Map.prototype = Object.create(Entity.prototype);

Map.prototype.cells = [];

Map.prototype.paths = [];

Map.prototype.skin = null;

// Override
Map.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['cells', 'paths', 'skin']);
};

module.exports = Map;
