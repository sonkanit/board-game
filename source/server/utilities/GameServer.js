'use strict';

var PlayerServer = require('../models/PlayerServer');
var EnvironmentServer = require('../models/EnvironmentServer');

var EnvironmentActionType = require('../../constants/EnvironmentActionType');
var PlayerActionType = require('../../constants/PlayerActionType');
var RollActionType = require('../../constants/RollActionType');
var WalkActionType = require('../../constants/WalkActionType');

// TODO: remove this
var Mockup = require('./Mockup');

var io;
var environment = Mockup.environment();

function GameServer(http) {
  io = require('socket.io')(http);

  io.on('connection', function (socket) {
    var id = socket.id;

    var player = Mockup.player();
    environment.addPlayer(player);

    // TODO: modulize this
    // TODO: minimize interaction??

    socket.emit(PlayerActionType.INITIALIZED, player);
    socket.emit(EnvironmentActionType.INITIALIZED, environment.publicize(player));
    socket.broadcast.emit(EnvironmentActionType.ENVIRONMENT_PLAYER_CONNECTED, player.publicize());

    socket.on(RollActionType.ROLL, function () {
      try {
        player.roll();
        socket.emit(RollActionType.ROLL_SUCCESS, player);
        socket.broadcast.emit(RollActionType.ROLL_SUCCESS, player.publicize());
      } catch (ex) {
        socket.emit(RollActionType.ROLL_ERROR, ex);
      }
    });

    // TODO: duplicate code
    socket.on(WalkActionType.WALK, function (position) {
      try {
        player.walk(position);
        socket.emit(WalkActionType.WALK_SUCCESS, player);
        socket.broadcast.emit(WalkActionType.WALK_SUCCESS, player.publicize());
      } catch (ex) {
        socket.emit(WalkActionType.WALK_ERROR, ex);
      }
    });

    socket.on('disconnect', function () {
      environment.removePlayer(player);
      socket.broadcast.emit(EnvironmentActionType.ENVIRONMENT_PLAYER_DISCONNECTED, player.publicize());
    });
  });
}

module.exports = GameServer;
