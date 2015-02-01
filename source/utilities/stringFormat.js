'use strict';

// http://stackoverflow.com/questions/2534803/string-format-in-javascript
function stringFormat() {
  var s = arguments[0];

  for (var i = 0; i < arguments.length - 1; i++) {
    var reg = new RegExp('\\{' + i + '\\}', 'gm');
    s = s.replace(reg, arguments[i + 1]);
  }

  return s;
}

module.exports = stringFormat;
