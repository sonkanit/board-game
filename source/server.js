'use strict';

var path = require('path');
var url = require('url');
var express = require('express');
var React = require('react');
var ReactAsync  = require('react-async');
var browserify = require('connect-browserify');
var nodejsx = require('node-jsx').install({ extension: '.jsx' });

var App = require('./client/components/App.jsx');

var GameServer = require('./server/GameServer');

var renderApp = function (req, res, next) {
  var path = url.parse(req.url).pathname;
  var app = React.createElement(App, { path: path });
  ReactAsync.renderToStringAsync(app, function (err, markup) {
    if (err) {
      return next(err);
    }
    res.send('<!doctype html>\n' + markup);
  });
};

var app = express();

if (process.env.NODE_ENV !== 'production') {
  app.get('/build/app.js',
    browserify('./source/client/components/App.jsx', {
      debug: true,
      watch: true
    }));
}

var http = require('http').Server(app);

var sever = new GameServer(http);

app.use('/build', express.static(path.join(__dirname, 'build')))
  .use(renderApp);

http.listen(3000, function () {
    console.log('Server started: http://localhost:3000');
  });
