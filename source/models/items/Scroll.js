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

Scroll.prototype.update = function (scroll) {
  Item.prototype.update.call(this, scroll);
  this.attack = scroll.attack;
  this.attackVary = scroll.attackVary;
  this.aoe = scroll.aoe;
};

module.exports = Scroll;
