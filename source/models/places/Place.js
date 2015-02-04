'use strict';

var Entity = require('../Entity');

function Place() {
  Entity.call(this);
}

// Inheritance
Place.prototype = Object.create(Entity.prototype);

Place.prototype.name = null;

// To be override
Place.prototype.action = function () {

};

module.exports = Place;
