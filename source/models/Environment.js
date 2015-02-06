'use strict';

var Entity = require('./Entity');
var Map = require('./Map');
var Player = require('./Player');

var ItemParser = require('./items/ItemParser');

var mapEntity = require('../utilities/mapEntity');

function Environment() {
  Entity.call(this);
  // TODO: WITHOUT THIS WILL CAUSE BUG IN REACT
  this.players = [];
  this.maps = [];
}

// Inheritance
Environment.prototype = Object.create(Entity.prototype);

Environment.prototype.players = [];

Environment.prototype.maps = [];

Environment.prototype.items = [];

Environment.prototype.update = function (environment) {
  Entity.prototype.update.call(this, environment);
  this.players = mapEntity(environment.players, Player);
  this.maps = mapEntity(environment.maps, Map);
  if (environment.items) {
    this.items = ItemParser.mapItemEntity(environment.items);
  }
};

// Override
Environment.prototype.publics = function () {
  return Entity.prototype.publics.call(this).concat(['players', 'maps']);
};

module.exports = Environment;
