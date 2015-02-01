'use strict';

var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;

var EnvironmentClient = require('../models/EnvironmentClient');

var EnvironmentActionType = require('../../constants/EnvironmentActionType');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var CHANGE_EVENT = 'ENVIROMENT_CHANGE';

var enviroment = new EnvironmentClient();

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
    return enviroment;
  },

  dispatchToken: AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
      case EnvironmentActionType.INITIALIZED:
      case EnvironmentActionType.UPDATED:
        enviroment.update(action.enviroment);
        EnvironmentStore.emitChange();
        break;
    }

    return true;
  })
});

module.exports = EnvironmentStore;
