'use strict';

var EnvironmentStore = require('../stores/EnvironmentStore');
var PlayerStore = require('../stores/PlayerStore');

var GameMixin = {
  getState: function () {
    return {
      environment: EnvironmentStore.get(),
      player: PlayerStore.get()
    };
  },

  getInitialState: function () {
    return this.getState();
  },

  componentDidMount: function () {
    EnvironmentStore.addChangeListener(this.refreshState);
    PlayerStore.addChangeListener(this.refreshState);
  },

  componentWillUnmount: function () {
    EnvironmentStore.removeChangeListener(this.refreshState);
    PlayerStore.removeChangeListener(this.refreshState);
  },

  refreshState: function () {
    this.setState(this.getState());
  }
};

module.exports = GameMixin;
