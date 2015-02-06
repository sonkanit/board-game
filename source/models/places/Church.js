'use strict';

var Place = require('./Place');

function Church() {
  Place.call(this);
  this.type = 'Church';
}

// Inheritance
Church.prototype = Object.create(Place.prototype);

Church.prototype.update = function (church) {
  Place.prototype.update.call(this, church);
};

module.exports = Church;
