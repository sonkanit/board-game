'use strict';

var Creature = require('./Creature');

function Player() {
  Creature.call(this);
}

// Inheritance
Player.prototype = Object.create(Creature.prototype);

Player.prototype.name = null;

Player.prototype.coins = null;

Player.prototype.token = null;

Player.prototype.cell = null;

Player.prototype.online = null;

// Override
Player.prototype.publics = function () {
  return Creature.prototype.publics.call(this).concat(['name', 'coins', 'token', 'cell', 'online']);
};

module.exports = Player;
