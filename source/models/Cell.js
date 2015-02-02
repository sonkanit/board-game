'use strict';

var Entity = require('./Entity');

function Cell() {
  Entity.call(this);
  // TODO: WITHOUT THIS WILL CAUSE BUG IN REACT
  this.neighbors = [];
}

// Inheritance
Cell.prototype = Object.create(Entity.prototype);

Cell.prototype.neighbors = [];

Cell.prototype.position = null;

Cell.prototype.place = null;

// Override
Cell.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['neighbors', 'postion', 'place']);
};

module.exports = Cell;
