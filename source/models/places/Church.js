'use strict';

var Place = require('./Place');

function Church() {
  Place.call(this);
}

// Inheritance
Church.prototype = Object.create(Place.prototype);

module.exports = Church;
