'use strict';

function mapEntity(array, Constructor) {
  return array.map(function (obj) {
    var enitity = new Constructor();
    enitity.update(obj);
    return enitity;
  });
}

module.exports = mapEntity;
