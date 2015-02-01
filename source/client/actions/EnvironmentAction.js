'use strict';

var GameClient = require('../utilities/GameClient');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EnvironmentActionType = require('../../constants/EnvironmentActionType');

var handleGameInitialized = function (enviroment) {
  AppDispatcher.handleServerAction({
    actionType: EnvironmentActionType.INITIALIZED,
    enviroment: enviroment
  });
};

var handleGameUpdated = function (enviroment) {
  AppDispatcher.handleServerAction({
    actionType: EnvironmentActionType.UPDATED,
    enviroment: enviroment
  });
};

var EnvironmentAction = {
  listen: function () {
    GameClient.socket.on(EnvironmentActionType.INITIALIZED, handleGameInitialized);
    GameClient.socket.on(EnvironmentActionType.UPDATED, handleGameUpdated);
  }
};

module.exports = EnvironmentAction;
