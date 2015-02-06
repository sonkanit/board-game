'use strict';

var EnvironmentServer = require('../models/EnvironmentServer');
var PlayerServer = require('../models/PlayerServer');

var ArmorServer = require('../models/items/ArmorServer');
var ConsumableServer = require('../models/items/ConsumableServer');
var ScrollServer = require('../models/items/ScrollServer');
var WeaponServer = require('../models/items/WeaponServer');

var ChurchServer = require('../models/places/ChurchServer');
var PortalServer = require('../models/places/PortalServer');
var TownServer = require('../models/places/TownServer');
var TreasureServer = require('../models/places/TreasureServer');

var Position = require('../../models/Position');
var Cell = require('../../models/Cell');
var Path = require('../../models/Path');
var Map = require('../../models/Map');

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

var mockItem = function (item) {
  item.id = chance.guid();
  item.name = chance.word();
  item.description = chance.paragraph();
  return item;
};

var mockPlace = function (place) {
  place.id = chance.guid();
  place.name = chance.word();
  return place;
};

var Mockup = {
  environment: function () {
    var environment = new EnvironmentServer();
    environment.maps = chance.n(chance.integer, chance.integer({ min: 5, max: 10 }))
      .map(function () { return Mockup.map(); });
    environment.items = chance.n(chance.integer, chance.integer({ min: 100, max: 200 }))
      .map(function () { return Mockup.item(); });
    environment.players = chance.n(chance.integer, chance.integer({ min: 100, max: 200 }))
      .map(function () { return Mockup.player(environment); });
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
      player.items = chance.pick(environment.items, chance.integer({ min: 5, max: 10 }));
    }
    return player;
  },
  map: function () {
    var map = new Map();
    map.id = chance.guid();
    map.skin = 'http://img2.wikia.nocookie.net/__cb20091103162232/lotr/images/5/5e/Middle-earth-film.jpg';
    chance.n(chance.integer, chance.integer({ min: 100, max: 200 }))
      .forEach(function () { map.cells.push(Mockup.cell()); });
    chance.n(chance.integer, chance.integer({ min: 100, max: 200 }))
      .forEach(function () { map.paths.push(Mockup.uniquePath(map.cells, map.paths)); });
    return map;
  },
  cell: function () {
    var cell = new Cell();
    cell.id = chance.guid();
    cell.position = new Position(chance.integer({ min: 0, max: 100 }), chance.integer({ min: 0, max: 100 }));
    cell.place = chance.bool({ likelihood: 10 }) ? Mockup.place() : null;
    return cell;
  },
  item: function () {
    return chance.pick([Mockup.armor, Mockup.consumable, Mockup.scroll, Mockup.weapon])();
  },
  armor: function () {
    var armor = new ArmorServer();
    mockItem(armor);
    armor.defence = chance.integer({ min: 1, max: 10 });
    return armor;
  },
  consumable: function () {
    var consumable = new ConsumableServer();
    mockItem(consumable);
    consumable.effect = chance.integer({ min: 1, max: 100 });
    return consumable;
  },
  scroll: function () {
    var scroll = new ScrollServer();
    mockItem(scroll);
    scroll.attack = chance.integer({ min: 10, max: 200 });
    scroll.attackVary = chance.integer({ min: 5, max: 20 });
    scroll.aoe = chance.integer({ min: 1, max: 100 });
    return scroll;
  },
  weapon: function () {
    var weapon = new WeaponServer();
    mockItem(weapon);
    weapon.attack = chance.integer({ min: 10, max: 200 });
    return weapon;
  },
  place: function () {
    return chance.pick([Mockup.church, Mockup.portal, Mockup.town, Mockup.treasure])();
  },
  church: function () {
    var church = new ChurchServer();
    mockPlace(church);
    return church;
  },
  portal: function () {
    var portal = new PortalServer();
    mockPlace(portal);
    // portal.destination
    return portal;
  },
  town: function () {
    var town = new TownServer();
    mockPlace(town);
    town.income = chance.integer({ min: 10, max: 500 });
    return town;
  },
  treasure: function () {
    var treasure = new TreasureServer();
    mockPlace(treasure);
    // treasure.contents = chance.integer({ min: 10, max: 500 });
    return treasure;
  },

  uniquePath: function (cells, paths) {
    var path = new Path();
    do {
      path.exit1 = chance.pick(cells);
      path.exit2 = chance.pick(cells);
    } while(path.exit1.id === path.exit2.id || !isUniquePath(path, paths));
    return path;
  },
  randomPlayer: function (environment) {
    return chance.pick(environment.players);
  },
  randomCell: function (environment) {
    return chance.pick(chance.pick(environment.maps).cells);
  }
};

module.exports = Mockup;
