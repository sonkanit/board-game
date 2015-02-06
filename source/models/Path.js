'use strict';

var Entity = require('./Entity');

function Path() {
  Entity.call(this);
}

Path.prototype.exit1 = null;

Path.prototype.exit2 = null;

Path.prototype.update = function (path) {
  Entity.prototype.update.call(this, path);
  this.exit1 = path.exit1;
  this.exit2 = path.exit2;
};

module.exports = Path;
