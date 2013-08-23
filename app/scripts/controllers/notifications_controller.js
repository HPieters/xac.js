'use strict';

/**
    Notifications Controller - Handle notifications on notifications page

    Todo: Check for notifications and hosts actually checking for notifications
    Todo: In case of a long list of notifications, what to do?
    Todo: Split notifications on Host

    @class NotificationsController
    @extends Ember.ArrayController
    @namespace App
    @module Ember
**/

App.NotificationsController = Ember.ArrayController.extend({
    hasHosts: false,
    hasNotifications: false,
    init: function() {
        if(App.Global.get('hosts') > 0) {
            this.set('hasHosts',true);
            this.set('hasNotifications', true)
        } else {
            this.set('hasHosts',false);
            this.set('hasNotifications', false)
        }
    }.observes('App.Global.hosts'),
    sortProperties: ['timestamp'],
    sortAscending: false,
    content: this.get('model')
});