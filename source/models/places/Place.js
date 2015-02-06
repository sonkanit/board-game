'use strict';

var Entity = require('../Entity');

function Place() {
  Entity.call(this);
}

// Inheritance
Place.prototype = Object.create(Entity.prototype);

Place.prototype.name = null;

Place.prototype.thumbnail = null;

Place.prototype.skin = null;

module.exports = Place;
