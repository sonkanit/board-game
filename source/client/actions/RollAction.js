'use strict';

var GameClient = require('../utilities/GameClient');
// var AppDispatcher = require('../dispatcher/AppDispatcher');
var RollActionType = require('../../constants/RollActionType');

var handleRollSuccess = function (result) {
  console.log(result);
};

var handleRollError = function (ex) {
  console.log(ex);
};

var RollAction = {
  listen: function () {
    GameClient.socket.on(RollActionType.ROLL_SUCCESS, handleRollSuccess);
    GameClient.socket.on(RollActionType.ROLL_ERROR, handleRollError);
  },
  roll: function () {
    GameClient.socket.emit(RollActionType.ROLL);
  }
};

module.exports = RollAction;
