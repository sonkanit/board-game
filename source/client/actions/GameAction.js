'use strict';

var GameClient = require('../utilities/GameClient');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var GameActionType = require('../../constants/GameActionType');

var handleGameInitialized = function (game) {
  AppDispatcher.handleServerAction({
    actionType: GameActionType.INITIALIZED,
    game: game
  });
};

var handleGameUpdated = function (game) {
  AppDispatcher.handleServerAction({
    actionType: GameActionType.UPDATED,
    game: game
  });
};

var PlayerAction = {
  listen: function () {
    GameClient.socket.on(GameActionType.INITIALIZED, handleGameUpdated);
    GameClient.socket.on(GameActionType.UPDATED, handleGameUpdated);
  }
};

module.exports = PlayerAction;
