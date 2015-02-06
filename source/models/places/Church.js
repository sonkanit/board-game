'use strict';

var Place = require('./Place');

function Church() {
  Place.call(this);
}

// Inheritance
Church.prototype = Object.create(Place.prototype);

Church.prototype.type = 'Church';

module.exports = Church;
