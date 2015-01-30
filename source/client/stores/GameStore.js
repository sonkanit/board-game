'use strict';

var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;

var GameActionType = require('../../constants/GameActionType');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var CHANGE_EVENT = 'GAME_CHANGE';

var game = {
  currentPlayers: []
};

var GameStore = _.extend({}, EventEmitter.prototype, {
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
    return game;
  },

  dispatchToken: AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
      case GameActionType.INITIALIZED:
      case GameActionType.UPDATED:
        _.extend(game, action.game);
        GameStore.emitChange();
        break;
    };

    return true;
  })
});

module.exports = GameStore;
