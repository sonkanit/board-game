'use strict';

var Cell = require('../../models/Cell');

function CellServer() {
  Cell.call(this);
}

// Inheritance
CellServer.prototype = Object.create(Cell.prototype);

CellServer.prototype.execute = function (player) {
  // TODO:
  // If there is any player here, attack him.
  // If there is any place here, do its execution.
  return true;
};

module.exports = CellServer;
