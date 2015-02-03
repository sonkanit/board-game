'use strict';

var Entity = require('../Entity');

function Place() {
  Entity.call(this);
}

// Inheritance
Place.prototype = Object.create(Entity.prototype);

Place.prototype.name = null;

module.exports = Place;
