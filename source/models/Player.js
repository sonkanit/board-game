'use strict';

var PublicData = require('./PublicData');

function Player() { }

// Inheritance
Player.prototype = Object.create(PublicData.prototype);

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
