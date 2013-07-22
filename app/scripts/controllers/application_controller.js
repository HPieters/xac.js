'use strict';

/* TODO: Seems like a way to complicated way to get this to function, also the problem remains that it wont update */
App.ApplicationController = Ember.Controller.extend({
    init: function() {
        var element = this;
        App.Server.find({}).then(function(obj) {
            var length = App.Server.all().content.length;
            App.Global.set('number', length);
        });
    }
});