'use strict';

App.ServersView = Ember.View.extend({
    hasHosts: false,
    onHostChange: function() {
        this.set('hasHosts',this.get('controller.hasHosts'));
        this.rerender();
    }.observes("this.controller.hasHosts")
})