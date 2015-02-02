'use strict';

var GUID = require('../utilities/guid');

function Token() {
  this.id = GUID.create();
}

Token.prototype.id = null;

Token.prototype.walks = null;

module.exports = Token;
