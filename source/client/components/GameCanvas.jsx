/**
* @jsx React.DOM
*/
'use strict';

var React = require('react');

var GameCanvas = React.createClass({

  drawFrame: function (e) {
    requestAnimationFrame(this.drawFrame);
  },

  componentDidMount: function () {
    this.drawFrame();
  },

  render: function () {
    return (
      <canvas className="game-canvas" width={this.props.width} height={this.props.height}></canvas>
    );
  }
});

module.exports = GameCanvas;
