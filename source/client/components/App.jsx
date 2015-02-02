/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactRouter = require('react-router-component');

var Locations = ReactRouter.Locations;
var Location = ReactRouter.Location;
var NotFound = ReactRouter.NotFound;

var Demo = require('./Demo.jsx');
var PageNotFound = require('./PageNotFound.jsx');

var GameClient = require('../utilities/GameClient');

var GameMixin = require('../mixins/GameMixin');

var EnvironmentAction = require('../actions/EnvironmentAction');
var PlayerAction = require('../actions/PlayerAction');
var RollAction = require('../actions/RollAction');
var WalkAction = require('../actions/WalkAction');

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
        <body className="container-fluid">
          <Locations path={ this.props.path } onNavigation={ this.handleNavigation }>
            <Location path="/" handler={ Demo } />
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
    GameClient.init(window.location.origin);
    EnvironmentAction.listen();
    PlayerAction.listen();
    RollAction.listen();
    WalkAction.listen();
    React.render(React.createElement(App, { path: window.location.pathname }), document);
  }
}
