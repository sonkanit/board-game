'use strict';

var _ = require('underscore');

var Item = require('./Item');
var Armor = require('./Armor');
var Consumable = require('./Consumable');
var Equipment = require('./Equipment');
var Scroll = require('./Scroll');
var Weapon = require('./Weapon');

var ItemParser = {
  parse: function (item) {
    if (_.isObject(item)) {
      var _item;
      switch (item.type) {
        case 'Armor':
          _item = new Armor();
          break;
        case 'Consumable':
          _item = new Consumable();
          break;
        case 'Equipment':
          _item = new Equipment();
          break;
        case 'Scroll':
          _item = new Scroll();
          break;
        case 'Weapon':
          _item = new Weapon();
          break;
        default:
          _item = new Item();
          break;
      }
      _item.update(item);
      return _item;
    }

    return null;
  },
  parseMany: function (items) {
    return _.isArray(items) ? items.map(function (item) {
      return ItemParser.parse(item);
    }) : [];
  }
};

module.exports = ItemParser;
