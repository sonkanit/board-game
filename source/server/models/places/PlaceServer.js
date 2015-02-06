'use strict';

var Place = require('../../../models/places/Place');

function PlaceServer() {
  Place.call(this);
}

// Inheritance
PlaceServer.prototype = Object.create(Place.prototype);

PlaceServer.prototype.execute = function (player) {
  // TODO:
  // If there is any player here, attack him.
  // If there is any place here, do its execution.
  return true;
};

module.exports = PlaceServer;
