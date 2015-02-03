'use strict';

var EnvironmentServer = require('../models/EnvironmentServer');
var PlayerServer = require('../models/PlayerServer');
var Position = require('../../models/Position');

var Chance = require('chance');
var chance = new Chance();

var Mockup = {
  environment: function () {
    var environment = new EnvironmentServer();
    return environment;
  },
  player: function () {
    var player = new PlayerServer();
    player.id = chance.guid();
    player.name = chance.name();
    player.coins = chance.integer({ min: 1, max: 20 });
    player.token = null;
    player.position = new Position(chance.integer({ min: 0, max: 100 }), chance.integer({ min: 0, max: 100 }));
    return player;
  }
};

module.exports = Mockup;
