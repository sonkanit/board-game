'use strict';

var Church = require('../../../models/places/Church');

function ChurchServer() {
  Church.call(this);
}

// Inheritance
ChurchServer.prototype = Object.create(Church.prototype);

ChurchServer.prototype.execute = function (player) {
  // TODO: put the logic here
  return true;
};

module.exports = ChurchServer;
