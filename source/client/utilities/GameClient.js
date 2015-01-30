'use strict';

var io = require('socket.io-client');

var GameClient = {
  socket: null
};

module.exports = GameClient;

if (typeof window !== 'undefined') {
  GameClient.socket = io(window.location.origin);
}
