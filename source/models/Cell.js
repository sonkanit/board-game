'use strict';

var Entity = require('./Entity');
var Position = require('./Position');

var PlaceParser = require('./places/PlaceParser');

function Cell() {
  Entity.call(this);
}

// Inheritance
Cell.prototype = Object.create(Entity.prototype);

Cell.prototype.position = null;

Cell.prototype.place = null;

Cell.prototype.update = function (cell) {
  Entity.prototype.update.call(this, cell);
  this.position = new Position();
  this.position.update(cell.position);
  this.place = PlaceParser.parse(cell.place);
};

Cell.prototype.toString = function () {
  return ((this.place && this.place.toString()) || '') + ' ' + ((this.position && this.position.toString()) || '');
};

// Override
Cell.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['postion', 'place']);
};

module.exports = Cell;
