'use strict';

var PublicData = require('./PublicData');

function Environment() {
  this.players = [];
}

// Inheritance
Environment.prototype = Object.create(PublicData.prototype);

Environment.prototype.players = null;

module.exports = Environment;
