'use strict';

var Entity = require('./Entity');

// Town
// Tresure box
// Church
function Place() {
  Entity.call(this);
}

// Inheritance
Place.prototype = Object.create(Entity.prototype);

module.exports = Place;
