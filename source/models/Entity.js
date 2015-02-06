'use strict';

function Entity() { }

Entity.prototype.id = null;

Entity.prototype.publicize = function () {
  var data = {};

  this.publics().forEach(function (field) {
    data[field] = this[field];
  }.bind(this));

  return data;
};

Entity.prototype.publics = function () {
  return ['id'];
};

Entity.prototype.update = function (entity) {
  this.id = entity.id;
};

module.exports = Entity;
