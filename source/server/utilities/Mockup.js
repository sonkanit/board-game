'use strict';

var EnvironmentServer = require('../models/EnvironmentServer');
var PlayerServer = require('../models/PlayerServer');
var Position = require('../../models/Position');
var Map = require('../../models/Map');
var Cell = require('../../models/Cell');
var Path = require('../../models/Path');

var Chance = require('chance');
var chance = new Chance();

var isUniquePath = function (path, paths) {
  for (var i = 0; i < paths.length; i++) {
    if (paths[i].exit1.id === path.exit1.id && paths[i].exit2.id === path.exit2.id) {
      return false;
    }
  }
  return true;
};

var Mockup = {
  environment: function () {
    var environment = new EnvironmentServer();
    environment.maps = chance.n(chance.integer, chance.integer({ min: 5, max: 10 }))
      .map(function () { return Mockup.map(); });
    chance.n(chance.integer, chance.integer({ min: 100, max: 200 }))
      .forEach(function () { environment.addPlayer(Mockup.player(environment)); });
    return environment;
  },
  player: function (environment) {
    var player = new PlayerServer();
    player.id = chance.guid();
    player.name = chance.name();
    player.coins = chance.integer({ min: 1, max: 20 });
    player.token = null;
    player.online = false;
    if (environment instanceof EnvironmentServer) {
      player.cell = Mockup.randomCell(environment);
    }
    return player;
  },
  map: function () {
    var map = new Map();
    map.id = chance.guid();
    chance.n(chance.integer, chance.integer({ min: 100, max: 200 }))
      .forEach(function () { map.cells.push(Mockup.cell()); });
    chance.n(chance.integer, chance.integer({ min: 100, max: 200 }))
      .forEach(function () { map.paths.push(Mockup.uniquePath(map.cells, map.paths)); });
    return map;
  },
  uniquePath: function (cells, paths) {
    var path = new Path();
    do {
      path.exit1 = chance.pick(cells);
      path.exit2 = chance.pick(cells);
    } while(path.exit1.id === path.exit2.id || !isUniquePath(path, paths));
    return path;
  },
  cell: function () {
    var cell = new Cell();
    cell.id = chance.guid();
    cell.position = new Position(chance.integer({ min: 0, max: 100 }), chance.integer({ min: 0, max: 100 }));
    // cell.place
    return cell;
  },

  randomPlayer: function (environment) {
    return chance.pick(environment.players);
  },
  randomCell: function (environment) {
    return chance.pick(chance.pick(environment.maps).cells);
  }
};

module.exports = Mockup;
