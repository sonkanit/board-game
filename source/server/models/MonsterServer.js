'use strict';

var Monster = require('../../models/Monster');

function MonsterServer() {
  Monster.call(this);
}

// Inheritance
MonsterServer.prototype = Object.create(Monster.prototype);

// Items
// Coins
MonsterServer.prototype.drops = [];

module.exports = MonsterServer;
