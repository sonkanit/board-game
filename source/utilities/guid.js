// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
'use strict';

var s4 = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

var GUID = {
  create: function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
};

module.exports = GUID;
