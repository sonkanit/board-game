'use strict';

var Scroll = require('../../../models/items/Scroll');

function ScrollServer() {
  Scroll.call(this);
}

// Inheritance
ScrollServer.prototype = Object.create(Scroll.prototype);

ScrollServer.prototype.execute = function (player) {
  // TODO: put the logic here
  return true;
};

module.exports = ScrollServer;
