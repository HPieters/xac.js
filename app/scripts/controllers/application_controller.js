'use strict';

/**
  The base controller for the whole world of XAC

  @class ApplicationController
  @extends Ember.Controller
  @namespace App
  @module Ember
**/

/* TODO: Seems like a way to complicated way to get this to function, also the problem remains that it wont update */
App.ApplicationController = Ember.Controller.extend({
    init: function() {
        // Possiblilty to move all to a single object?
        App.Pools.find({}).then(function(obj) {
            var length = App.Pools.all().content.length;
            App.Global.set('pools', length);
        });

        App.Server.find({}).then(function(obj) {
            var length = App.Server.all().content.length;
            App.Global.set('hosts', length);
        });

        App.VM.find({'template': false}).then(function(obj) {
            var length = App.VM.all().content.get('length');
            App.Global.set('vms', length);
        });

    },
    updateCurrentPath: function() {
        var _path = this.get('currentPath');
        App.set('currentPath', _path);
    }.observes('currentPath')
});