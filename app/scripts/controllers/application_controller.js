'use strict';

/* TODO: Seems like a way to complicated way to get this to function, also the problem remains that it wont update */
App.ApplicationController = Ember.Controller.extend({
    init: function() {
        /* Ow boy this feels so wrong */
        App.Pools.find();

        App.Pools.find({}).then(function(obj) {
            var length = App.Pools.all().content.length;
            App.Global.set('pools', length);
        });

        App.Server.find();

        App.Server.find({}).then(function(obj) {
            var length = App.Server.all().content.length;
            App.Global.set('hosts', length);
        });
    }
});