'use strict';

var Entity = require('./Entity');

function Player() { }

// Inheritance
Player.prototype = Object.create(Entity.prototype);

Player.prototype.id = null;

Player.prototype.fullName = null;

Player.prototype.coins = null;

Player.prototype.token = null;

Player.prototype.position = null;

Player.prototype.publicFields = [
  'id',
  'fullName',
  'coins',
  'position'
];

module.exports = Player;
