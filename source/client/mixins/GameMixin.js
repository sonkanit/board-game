'use strict';

var React = require('react');

var GameStore = require('../stores/GameStore');
var PlayerStore = require('../stores/PlayerStore');

var GameMixin = {
  getState: function () {
    return {
      game: GameStore.get(),
      player: PlayerStore.get()
    };
  },

  getInitialState: function () {
    return this.getState();
  },

  componentDidMount: function () {
    GameStore.addChangeListener(this.refreshState);
    PlayerStore.addChangeListener(this.refreshState);
  },

  componentWillUnmount: function () {
    GameStore.removeChangeListener(this.refreshState);
    PlayerStore.removeChangeListener(this.refreshState);
  },

  refreshState: function () {
    this.setState(this.getState());
  }
};

module.exports = GameMixin;
