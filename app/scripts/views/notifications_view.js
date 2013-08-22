'use strict';

App.NotificationsView = Ember.View.extend({
    hasHosts: false,
    hasNotifications: false,
    onHostsChange: function() {
        if(this.get('controller').get('hasHosts') > 0) {
            this.set('hasHosts',true);
        } else {
            this.set('hasHosts',false);
        }
    }.observes("this.controller.hasHosts"),
    didInsertElement: function() {
        App.Global.set('notifications',0)
    }
});