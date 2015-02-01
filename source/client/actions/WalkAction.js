'use strict';

var GameClient = require('../utilities/GameClient');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var WalkActionType = require('../../constants/WalkActionType');

var handleRollSuccess = function (token) {
  AppDispatcher.handleServerAction({
    actionType: WalkActionType.WALK_SUCCESS,
    token: token
  });
};

var handleRollError = function (ex) {
  AppDispatcher.handleServerAction({
    actionType: WalkActionType.WALK_ERROR,
    expection: ex
  });
};

var WalkAction = {
  listen: function () {
    GameClient.socket.on(WalkActionType.WALK_SUCCESS, handleRollSuccess);
    GameClient.socket.on(WalkActionType.WALK_ERROR, handleRollError);
  },
  walk: function (position) {
    GameClient.socket.emit(WalkActionType.WALK, position);
    AppDispatcher.handleServerAction({
      actionType: WalkActionType.WALK
    });
  }
};

module.exports = WalkAction;
