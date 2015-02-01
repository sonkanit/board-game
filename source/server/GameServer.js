'use strict';

var PlayerServer = require('./models/PlayerServer');
var EnvironmentServer = require('./models/EnvironmentServer');

var EnvironmentActionType = require('../constants/EnvironmentActionType');
var PlayerActionType = require('../constants/PlayerActionType');
var RollActionType = require('../constants/RollActionType');

var io;
var environment = new EnvironmentServer();

function GameServer(http) {
  io = require('socket.io')(http);

  io.on('connection', function (socket) {
    var id = socket.id;

    var player = new PlayerServer(id);
    environment.addPlayer(player);

    var clientData = environment.getClientData();

    socket.emit(PlayerActionType.INITIALIZED, player);
    socket.emit(EnvironmentActionType.INITIALIZED, clientData);
    socket.broadcast.emit(EnvironmentActionType.UPDATED, clientData);

    socket.on(RollActionType.ROLL, function () {
      try {
        socket.emit(RollActionType.ROLL_SUCCESS, player.roll());
      } catch (ex) {
        socket.emit(RollActionType.ROLL_ERROR, ex);
      } finally {
        socket.emit(PlayerActionType.UPDATED, player);
        socket.broadcast.emit(EnvironmentActionType.UPDATED, environment.getClientData());
      }
    });

    socket.on('disconnect', function () {
      environment.removePlayer(player);
      socket.broadcast.emit(EnvironmentActionType.UPDATED, environment);
    });
  });
}

module.exports = GameServer;
