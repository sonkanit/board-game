'use strict';

function PublicData() { }

PublicData.prototype.getPublicData = function () {
  var data = {};

  this.publicFields.forEach(function (field) {
    data[field] = this[field];
  }.bind(this));

  return data;
};

PublicData.prototype.publicFields = [];

module.exports = PublicData;
