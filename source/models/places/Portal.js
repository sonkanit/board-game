'use strict';

var Place = require('./Place');

function Portal() {
  Place.call(this);
}

// Inheritance
Portal.prototype = Object.create(Portal.prototype);

Portal.prototype.destination = null;

module.exports = Portal;
