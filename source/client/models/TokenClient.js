'use strict';

var Token = require('../../models/Token');

var stringFormat = require('../../utilities/stringFormat');

function TokenClient() {
  Token.call(this);
}

// Inheritance
TokenClient.prototype = Object.create(Token.prototype);

TokenClient.prototype.toString = function () {
  return stringFormat('{0} - {1}', this.id, this.walks);
};

TokenClient.prototype.update = function (token) {
  this.id = token.id;
  this.walks = token.walks;
};

module.exports = TokenClient;
