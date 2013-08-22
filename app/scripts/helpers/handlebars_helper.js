'use strict';

/**
  Helpers for Handlebars

  @class Handlebars.helper
  @namespace Ember
  @module Handlebars
**/

Ember.Handlebars.helper('convertDate', function(value, options) {
    var time = moment(value, 'YYYYMMDDTHH:mm:ss Z').format('dddd, MMMM Do YYYY, HH:mm');
    return new Handlebars.SafeString(time);
});


Ember.Handlebars.helper('convertDateToAgo', function(value, options) {
    var time = moment(value, 'YYYYMMDDHH').fromNow();
    return new Handlebars.SafeString(time);
});

Ember.Handlebars.helper('shortenNotification', function(value, options) {
    var escaped = Handlebars.Utils.escapeExpression(value);
    var string  = escaped.substr(0,55);
    return new Handlebars.SafeString(string);
});

Ember.Handlebars.helper('clean', function(value, options) {
    var escaped = Handlebars.Utils.escapeExpression(value);
    return new Handlebars.SafeString(escaped);
});