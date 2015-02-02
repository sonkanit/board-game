'use strict';

var GameClient = require('../utilities/GameClient');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EnvironmentActionType = require('../../constants/EnvironmentActionType');

var handleEnvironmentInitialized = function (environment) {
  AppDispatcher.handleServerAction({
    actionType: EnvironmentActionType.INITIALIZED,
    environment: environment
  });
};

var handlePlayerConnected = function (player) {
  AppDispatcher.handleServerAction({
    actionType: EnvironmentActionType.ENVIRONMENT_PLAYER_CONNECTED,
    player: player
  });
};

var handlePlayerDisconnected = function (player) {
  AppDispatcher.handleServerAction({
    actionType: EnvironmentActionType.ENVIRONMENT_PLAYER_DISCONNECTED,
    player: player
  });
};

var EnvironmentAction = {
  listen: function () {
    GameClient.socket.on(EnvironmentActionType.INITIALIZED, handleEnvironmentInitialized);
    GameClient.socket.on(EnvironmentActionType.ENVIRONMENT_PLAYER_CONNECTED, handlePlayerConnected);
    GameClient.socket.on(EnvironmentActionType.ENVIRONMENT_PLAYER_DISCONNECTED, handlePlayerDisconnected);
  }
};

module.exports = EnvironmentAction;
