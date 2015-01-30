'use strict';

var _ = require('underscore');
var Dispatcher = require('flux').Dispatcher;

var PayloadSource = require('../../constants/PayloadSource');

var AppDispatcher = _.extend(new Dispatcher(), {
  handleServerAction: function (action) {
    var payload = {
      source: PayloadSource.SERVER,
      action: action
    };

    this.dispatch(payload);
  },

  handleViewAction: function (action) {
    var payload = {
      source: PayloadSource.VIEW,
      action: action
    };

    this.dispatch(payload);
  }
});

module.exports = AppDispatcher;
