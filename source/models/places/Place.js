'use strict';

var Entity = require('../Entity');

function Place() {
  Entity.call(this);
}

// Inheritance
Place.prototype = Object.create(Entity.prototype);

// For serialization
Place.prototype.type = null;

Place.prototype.name = null;

Place.prototype.thumbnail = null;

Place.prototype.skin = null;

Place.prototype.update = function (place) {
  Entity.prototype.update.call(this, place);
  this.type = place.type;
  this.name = place.name;
  this.thumbnail = place.thumbnail;
  this.skin = place.skin;
};

module.exports = Place;
