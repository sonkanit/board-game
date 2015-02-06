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

Treasure.prototype.update = function (treasure) {
  Place.prototype.update.call(this, treasure);
  // TODO: make content as entity...
  this.contents = treasure.contents;
};

module.exports = Treasure;
