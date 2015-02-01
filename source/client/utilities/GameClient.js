'use strict';

var io = require('socket.io-client');

// Static class
var GameClient = {
  init: function (url) {
    this.socket = io(url);
  },
  socket: null
};

module.exports = GameClient;
