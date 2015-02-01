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
      WalkAction.walk(new Position(chance.integer({ min: 0, max: 100 }), chance.integer({ min: 0, max: 100 })));
    };

    var getPlayerItem = function (player) {
      return (
        <li key={ player.id }>{ player.fullName } ({ player.position.x }, { player.position.y })</li>
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
            <h4>{ this.state.player.fullName }</h4>
            <dl className="dl-horizontal">
              <dt>ID</dt>
              <dd>{ this.state.player.id }</dd>
              <dt>Coins</dt>
              <dd>{ this.state.player.coins }</dd>
              <dt>Token</dt>
              <dd>{ toString(this.state.player.token) }</dd>
              <dt>Position</dt>
              <dd>{ toString(this.state.player.position) }</dd>
            </dl>
            <button className="btn btn-primary" onClick={ roll }>Roll</button>
            <button className="btn btn-primary" style={ walkButton } onClick={ walk }>Walk</button>
          </div>
        </div>
        <h3>Online Players</h3>
        <ul>
          { this.state.environment.players.map(getPlayerItem) }
        </ul>
      </div>
    );
  }
});

module.exports = Demo;
