'use strict';

var Place = require('./Place');

function Town() {
  Place.call(this);
}

// Inheritance
Town.prototype = Object.create(Town.prototype);

Town.prototype.type = 'Town';

Town.prototype.income = null;

module.exports = Town;
