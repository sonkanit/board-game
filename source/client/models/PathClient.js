'use strict';

var Path = require('../../models/Path');

function PathClient() {
  Path.call(this);
}

// Inheritance
PathClient.prototype = Object.create(Path.prototype);

PathClient.prototype.update = function (path) {
  this.exit1 = path.exit1;
  this.exit2 = path.exit2;
};

module.exports = PathClient;
