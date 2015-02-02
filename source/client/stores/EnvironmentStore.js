'use strict';

var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;

var EnvironmentClient = require('../models/EnvironmentClient');

var EnvironmentActionType = require('../../constants/EnvironmentActionType');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var CHANGE_EVENT = 'ENVIROMENT_CHANGE';

var environment = new EnvironmentClient();

var EnvironmentStore = _.extend({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function () {
    return environment;
  },

  dispatchToken: AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
      case EnvironmentActionType.INITIALIZED:
        environment.update(action.environment);
        break;
      case EnvironmentActionType.ENVIRONMENT_PLAYER_CONNECTED:
        environment.addPlayer(action.player);
        break;
      case EnvironmentActionType.ENVIRONMENT_PLAYER_DISCONNECTED:
        environment.removePlayer(action.player);
        break;
      case EnvironmentActionType.ENVIRONMENT_PLAYER_UPDATED:
        environment.updatePlayer(action.player);
        break;
    }

    environment.logs.push(payload);
    EnvironmentStore.emitChange();

    return true;
  })
});

module.exports = EnvironmentStore;
