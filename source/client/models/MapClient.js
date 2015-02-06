'use strict';

var Map = require('../../models/Map');

function MapClient() {
  Map.call(this);

  this.image = new Image();
}

// Inheritance
MapClient.prototype = Object.create(Map.prototype);

MapClient.prototype.image = null;
MapClient.prototype.frameUpdate = function (dt) {
  //do nothing for static map
};

MapClient.prototype.drawFrame = function (ctx) {
  if(this.skin && this.image.src != this.skin) {
    this.image.src = this.skin;
  }
  if(this.image.complete) {
    ctx.drawImage(this.image, 0, 0, 800, 600, 0, 0, 800, 600);
  }
};

module.exports = MapClient;
