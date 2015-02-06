'use strict';

var Place = require('./Place');

function Portal() {
  Place.call(this);
  this.type = 'Portal';
}

// Inheritance
Portal.prototype = Object.create(Portal.prototype);

Portal.prototype.destination = null;

Portal.prototype.update = function (portal) {
  Place.prototype.update.call(this, portal);
  this.destination = portal.destination;
};

module.exports = Portal;
