'use strict';

var Entity = require('./Entity');
var Position = require('./Position');

function Cell() {
  Entity.call(this);
  // TODO: WITHOUT THIS WILL CAUSE BUG IN REACT
  this.paths = [];
}

// Inheritance
Cell.prototype = Object.create(Entity.prototype);

Cell.prototype.position = null;

Cell.prototype.place = null;

Cell.prototype.update = function (cell) {
  Entity.prototype.update.call(this, cell);
  this.position = new Position();
  this.position.update(cell.position);
  // this.place = cell.place;
};

Cell.prototype.toString = function () {
  return (this.position && this.position.toString()) || '';
};

// Override
Cell.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['paths', 'postion', 'place']);
};

module.exports = Cell;
