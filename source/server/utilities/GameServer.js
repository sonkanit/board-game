'use strict';

var PlayerServer = require('../models/PlayerServer');
var EnvironmentServer = require('../models/EnvironmentServer');

var EnvironmentActionType = require('../../constants/EnvironmentActionType');
var PlayerActionType = require('../../constants/PlayerActionType');
var RollActionType = require('../../constants/RollActionType');
var WalkActionType = require('../../constants/WalkActionType');

var io;
var environment = new EnvironmentServer();

function GameServer(http) {
  io = require('socket.io')(http);

  io.on('connection', function (socket) {
    var id = socket.id;

    var player = new PlayerServer(id);
    environment.addPlayer(player);

    // TODO: modulize this
    // TODO: minimize interaction??

    var clientData = environment.getClientData(player);

    socket.emit(PlayerActionType.INITIALIZED, player);
    socket.emit(EnvironmentActionType.INITIALIZED, clientData);
    socket.broadcast.emit(EnvironmentActionType.ENVIRONMENT_PLAYER_CONNECTED, player);

    socket.on(RollActionType.ROLL, function () {
      try {
        player.roll();
        socket.emit(RollActionType.ROLL_SUCCESS, player);
        socket.broadcast.emit(EnvironmentActionType.ENVIRONMENT_PLAYER_UPDATED, player.getPublicData());
      } catch (ex) {
        socket.emit(RollActionType.ROLL_ERROR, ex);
      }
    });

    // TODO: duplicate code
    socket.on(WalkActionType.WALK, function (position) {
      try {
        player.walk(position);
        socket.emit(WalkActionType.WALK_SUCCESS, player);
        socket.broadcast.emit(EnvironmentActionType.ENVIRONMENT_PLAYER_UPDATED, player.getPublicData());
      } catch (ex) {
        socket.emit(WalkActionType.WALK_ERROR, ex);
      }
    });

    socket.on('disconnect', function () {
      environment.removePlayer(player);
      socket.broadcast.emit(EnvironmentActionType.ENVIRONMENT_PLAYER_DISCONNECTED, player.getPublicData());
    });
  });
}

module.exports = GameServer;
