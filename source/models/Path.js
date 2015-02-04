'use strict';

var Entity = require('./Entity');

function Path() {
  Entity.call(this);
}

Path.prototype.exit1 = null;

Path.prototype.exit2 = null;

module.exports = Path;
