'use strict';

var Place = require('./Place');

function TreasureBox() {
  Place.call(this);
}

// Inheritance
TreasureBox.prototype = Object.create(Town.prototype);

// Effects/Items
TreasureBox.prototype.contents = null;

module.exports = TreasureBox;
