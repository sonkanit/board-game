'use strict';

var Map = require('../../models/Map');

var CellClient = require('./CellClient');
var PathClient = require('./PathClient');

function MapClient() {
  Map.call(this);
}

// Inheritance
MapClient.prototype = Object.create(Map.prototype);

MapClient.prototype.update = function (map) {
  // TODO: update instead of re-create
  this.cells = map.cells.map(function (_cell) {
    var cell = new CellClient();
    cell.update(_cell);
    return cell;
  });

  // TODO: update instead of re-create
  this.paths = map.paths.map(function (_path) {
    var path = new PathClient();
    path.update(_path);
    return path;
  });

  this.skin = map.skin;
};

module.exports = MapClient;
