/**
* @jsx React.DOM
*/
'use strict';

var React = require('react');

var GameMixin = require('../mixins/GameMixin');

var RollAction = require('../actions/RollAction');

var Demo = React.createClass({
  mixins: [GameMixin],

  render: function () {
    var roll = function () {
      RollAction.roll();
    };

    var walk = function () {
      alert('walk');
    };

    var getPlayerItem = function (player) {
      return (
        <li>{ player.id } ({ player.position.x }, { player.position.y })</li>
      );
    };

    var walkButton = {
      display: this.state.player.token ? '' : 'none'
    };

    var toString = function (obj) {
      return (obj && obj.toString && obj.toString()) || '';
    };

    return (
      <div>
        <button onClick={ roll }>Roll</button>
        <button style={ walkButton } onClick={ walk }>Walk</button>
        <h3>Player Info</h3>
        <ul>
          <li>ID: { this.state.player.id }</li>
          <li>Coins: { this.state.player.coins }</li>
          <li>Token: { toString(this.state.player.token) }</li>
          <li>Position: { toString(this.state.player.position) }</li>
        </ul>
        <h3>Online Players</h3>
        <ul>
          { this.state.environment.players.map(getPlayerItem) }
        </ul>
      </div>
    );
  }
});

module.exports = Demo;
