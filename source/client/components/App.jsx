/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactRouter = require('react-router-component');

var Locations = ReactRouter.Locations;
var Location = ReactRouter.Location;
var NotFound = ReactRouter.NotFound;

var PageNotFound = require('./PageNotFound.jsx');

var GameClient = require('../utilities/GameClient');

var GameMixin = require('../mixins/GameMixin');

var GameAction = require('../actions/GameAction');
var PlayerAction = require('../actions/PlayerAction');
var RollAction = require('../actions/RollAction');

var Test = React.createClass({
  mixins: [GameMixin],

  render: function () {
    var roll = function () {
      RollAction.roll();
    };

    var getPlayerItem = function (player) {
      return (
        <li>{ player.id } { player.position.x } { player.position.y }</li>
      );
    };

    return (
      <div>
        <button onClick={ roll }>Roll</button>
        <h3>Player Info</h3>
        <ul>
          <li>ID: { this.state.player.id }</li>
          <li>Position: ({ this.state.player.position && this.state.player.position.x }, { this.state.player.position && this.state.player.position.y })</li>
        </ul>
        <h3>Online Players</h3>
        <ul>
          { this.state.game.currentPlayers.map(getPlayerItem) }
        </ul>
      </div>
    );
  }
});

var App = React.createClass({
  handleNavigation: function () {
    this.setProps({ path: window.location.pathname });
  },

  render: function () {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/build/app.css" />
          <script src="/build/app.js" />
          <title>Game</title>
        </head>
        <body className="container">
          <Locations path={ this.props.path } onNavigation={ this.handleNavigation }>
            <Location path="/" handler={ Test } />
            <NotFound handler={ PageNotFound } />
          </Locations>
        </body>
      </html>
    );
  }
});

module.exports = App;

if (typeof window !== 'undefined') {
  window.onload = function() {
    GameAction.listen()
    PlayerAction.listen();
    RollAction.listen();
    React.render(React.createElement(App, { path: window.location.pathname }), document);
  }
}
