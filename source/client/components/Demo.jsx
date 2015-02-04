/**
* @jsx React.DOM
*/
'use strict';

var React = require('react');

var GameMixin = require('../mixins/GameMixin');

var RollAction = require('../actions/RollAction');
var WalkAction = require('../actions/WalkAction');

var Position = require('../../models/Position');

// TODO: Remove this
var Chance = require('chance');
var chance = new Chance();

var Demo = React.createClass({
  mixins: [GameMixin],

  render: function () {
    var roll = function () {
      RollAction.roll();
    };

    var walk = function () {
      // MOCKUP
      WalkAction.walk(chance.pick(this.state.environment.maps[0].cells));
    }.bind(this);

    var sortPlayer = function (a, b) {
      return a.online ? -1 : 1;
    };

    var getPlayerItem = function (player, idx) {
      return (
        <li key={ player.id || 'undefined' } className={ player.online ? 'online' : '' }>
          { toString(player.name) } { toString(player.cell) }
        </li>
      );
    };

    var getLogItem = function (log, idx) {
      return (
        <li key={ idx }>{ log }</li>
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
        <div className="panel panel-default">
          <div className="panel-body">
            <h4>{ this.state.player.name }</h4>
            <dl className="dl-horizontal">
              <dt>ID</dt>
              <dd>{ this.state.player.id }</dd>
              <dt>Coins</dt>
              <dd>{ this.state.player.coins }</dd>
              <dt>Token</dt>
              <dd>{ toString(this.state.player.token) }</dd>
              <dt>Cell</dt>
              <dd>{ toString(this.state.player.cell) }</dd>
            </dl>
            <button className="btn btn-primary" onClick={ roll }>Roll</button>
            <button className="btn btn-primary" style={ walkButton } onClick={ walk }>Walk</button>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body player-list">
            <h4>Players</h4>
            <ul>
              { [this.state.player].concat(this.state.environment.players).sort(sortPlayer).map(getPlayerItem) }
            </ul>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body log">
            <h4>Logs</h4>
            <ul>
              { this.state.environment.logs.map(getLogItem) }
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Demo;
