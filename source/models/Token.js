'use strict';

var stringFormat = require('../utilities/stringFormat');

function Token() { }

Token.prototype.id = null;

Token.prototype.walks = null;

Token.prototype.toString = function () {
  return stringFormat('{0} - {1}', this.id, this.walks);
};

Token.prototype.update = function (token) {
  this.id = token.id;
  this.walks = token.walks;
};

module.exports = Token;
