'use strict';

var Place = require('./Place');

function Treasure() {
  Place.call(this);
}

// Inheritance
Treasure.prototype = Object.create(Place.prototype);

Treasure.prototype.type = 'Treasure';

// Effects/Items
Treasure.prototype.contents = null;

module.exports = Treasure;
