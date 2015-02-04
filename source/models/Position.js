'use strict';

var stringFormat = require('../utilities/stringFormat');

function Position(x, y) {
  this.x = x;
  this.y = y;
}

Position.prototype.x = null;

Position.prototype.y = null;

Position.prototype.toString = function () {
  return stringFormat('({0}, {1})', this.x, this.y);
};

Position.prototype.update = function (position) {
  this.x = position.x;
  this.y = position.y;
};

module.exports = Position;
