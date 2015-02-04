'use strict';

function newOrUpdate(entityField, obj, Constructor) {
  if (obj) {
    if (!(this[entityField] instanceof Constructor)) {
      this[entityField] = new Constructor();
    }
    this[entityField].update(obj);
  } else {
    this[entityField] = null;
  }
}

module.exports = newOrUpdate;
