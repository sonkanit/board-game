'use strict';

var Layer = require('./Layer');

function Renderer (canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.layers = [];
};

Renderer.prototype.canvas = null;
Renderer.prototype.layers = null;
Renderer.prototype.ctx = null;
Renderer.prototype.addLayer = function (layer) {
  this.layers.push(layer);
};

Renderer.prototype.drawFrame = function () {
  this.ctx.clearRect(0, 0, 800, 600);

  for(var i = 0; i < this.layers.length; i++) {
    var layer = this.layers[i];
    layer.drawFrame(this.ctx);
  }
};

module.exports = Renderer;
