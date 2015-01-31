'use strict';

var PlayerServer = require('./PlayerServer');

var GameActionType = require('../constants/GameActionType');
var PlayerActionType = require('../constants/PlayerActionType');
var RollActionType = require('../constants/RollActionType');

var io;
var currentPlayers = [];

function GameServer(http) {
  io = require('socket.io')(http);

  io.on('connection', function (socket) {
    var id = socket.id;

    var player = new PlayerServer(id);

    currentPlayers.push(player);

    socket.emit(PlayerActionType.INITIALIZED, player);
    socket.emit(GameActionType.INITIALIZED, { currentPlayers: currentPlayers });
    socket.broadcast.emit(GameActionType.UPDATED, { currentPlayers: currentPlayers });

    socket.on(RollActionType.ROLL, function () {
      try {
        socket.emit(RollActionType.ROLL_SUCCESS, player.roll());
      } catch (ex) {
        socket.emit(RollActionType.ROLL_ERROR, ex);
      } finally {
        socket.emit(PlayerActionType.UPDATED, player);
        socket.broadcast.emit(GameActionType.UPDATED, { currentPlayers: currentPlayers });
      }
    });

    socket.on('disconnect', function () {
      currentPlayers.splice(currentPlayers.indexOf(player), 1);
      socket.broadcast.emit(GameActionType.UPDATED, { currentPlayers: currentPlayers });
    });
  });
}

module.exports = GameServer;
