'use strict';

function Layer () {
  this.objects = [];
};

Layer.prototype.objects = null;

Layer.prototype.addObject = function (object) {
  this.objects.push(object);
};

Layer.prototype.drawFrame = function (ctx) {
  for(var i = 0; i < this.objects.length; i++) {
    var obj = this.objects[i];
    obj.drawFrame(ctx);
  }
};

module.exports = Layer;
