/**
* @jsx React.DOM
*/
'use strict';

var React = require('react');
var Renderer = require('./../utilities/Renderer');
var Layer = require('./../utilities/Layer');
var EnvironmentStore = require('./../stores/EnvironmentStore');

var GameCanvas = React.createClass({


  drawFrame: function (e) {
    //TODO implement getActiveMap somewhere
    var map = EnvironmentStore.get().maps[0];
    if(map) {
      this.mapLayer.objects[0] = map;
    }
    this.renderer.drawFrame();
    requestAnimationFrame(this.drawFrame);
  },

  componentDidMount: function () {

    var canvas = this.getDOMNode();
    this.renderer = new Renderer(canvas);
    this.mapLayer = new Layer();
    this.renderer.addLayer(this.mapLayer);
    this.drawFrame();
  },

  render: function () {
    return (
      <canvas id="main-canvas" className="game-canvas" width={this.props.width} height={this.props.height}></canvas>
    );
  }
});

module.exports = GameCanvas;
