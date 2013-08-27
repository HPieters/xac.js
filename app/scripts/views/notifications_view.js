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
    onNotificationsChange: function() {
        if(this.get('controller').get('hasNotifications') > 0) {
            this.set('hasNotifications',true);
        } else {
            this.set('hasNotifications',false);
        }
    }.observes("this.controller.hasNotifications"),
    didInsertElement: function() {
        /* For notification purposes */
        App.Global.set('notifications',0)
    }
});