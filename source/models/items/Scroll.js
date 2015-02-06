'use strict';

var Item = require('./Item');

function Scroll() {
  Item.call(this);
  this.type = 'Scroll';
}

// Inheritance
Scroll.prototype = Object.create(Item.prototype);

Scroll.prototype.attack = null;

Scroll.prototype.attackVary = null;

Scroll.prototype.aoe = null;

module.exports = Scroll;
