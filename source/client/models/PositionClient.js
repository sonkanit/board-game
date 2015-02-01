'use strict';

var Position = require('../../models/Position');

var stringFormat = require('../../utilities/stringFormat');

function PositionClient() {
  Position.call(this);
}

// Inheritance
PositionClient.prototype = Object.create(Position.prototype);

PositionClient.prototype.toString = function () {
  return stringFormat('({0}, {1})', this.x, this.y);
};

PositionClient.prototype.update = function (position) {
  this.x = position.x;
  this.y = position.y;
};

module.exports = PositionClient;
