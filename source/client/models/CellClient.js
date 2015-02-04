'use strict';

var Cell = require('../../models/Cell');

var PositionClient = require('./PositionClient');

var stringFormat = require('../../utilities/stringFormat');

function CellClient() {
  Cell.call(this);
}

// Inheritance
CellClient.prototype = Object.create(Cell.prototype);

CellClient.prototype.toString = function () {
  return (this.position && this.position.toString()) || '';
};

CellClient.prototype.update = function (cell) {
  this.position = new PositionClient();
  this.position.update(cell.position);
  // this.place = cell.place;
};

module.exports = CellClient;
