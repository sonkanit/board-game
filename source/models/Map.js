'use strict';

var Entity = require('./Entity');
var Cell = require('./Cell');
var Path = require('./Path');

var mapEntity = require('../utilities/mapEntity');

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

Map.prototype.width = null;

Map.prototype.height = null;

Map.prototype.update = function (map) {
  this.cells = mapEntity(map.cells, Cell);
  this.paths = mapEntity(map.paths, Path);
  this.skin = map.skin;
};

// Override
Map.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['cells', 'paths', 'skin', 'width', 'height']);
};

module.exports = Map;
