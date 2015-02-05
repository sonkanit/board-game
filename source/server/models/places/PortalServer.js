'use strict';

var Church = require('../../models/Portal');

function PortalServer() {
  Portal.call(this);
}

// Inheritance
PortalServer.prototype = Object.create(Portal.prototype);

PortalServer.prototype.execute = function (player) {
  // TODO: put the logic here
  return true;
};

module.exports = PortalServer;
