'use strict';

var GUID = require('../utilities/guid');
var randomNumber = require('../utilities/randomNumber');

function Token() {
  this.id = GUID.create();
  this.walks = randomNumber(6);
}

Token.prototype.id = null;

Token.prototype.walks = null;

module.exports = Token;
