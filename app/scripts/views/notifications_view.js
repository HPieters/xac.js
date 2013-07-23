'use strict';

App.NotificationsView = Ember.View.extend({
    didInsertElement: function() {
        App.Global.set('notifications',0)
    }
});