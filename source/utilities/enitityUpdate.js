'use strict';

function enitityUpdate(entity, entityField, obj, Constructor) {
  if (obj) {
    // if (!(entity[entityField] instanceof Constructor)) {
    //   entity[entityField] = new Constructor();
    // }
    entity[entityField] = new Constructor();
    entity[entityField].update(obj);
  } else {
    entity[entityField] = null;
  }
}

module.exports = enitityUpdate;
