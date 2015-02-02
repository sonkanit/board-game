'use strict';

// http://stackoverflow.com/questions/7176908/how-to-get-index-of-object-by-its-property-in-javascript
function findWithAttr(array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
}

module.exports = findWithAttr;
