'use strict';

var GUID = require('../utilities/guid');
var randomNumber = require('../utilities/randomNumber');

function Token() {
  this.id = GUID.create();
  this.walks = randomNumber(6);
}

module.exports = Token;
