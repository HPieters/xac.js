'use strict';

/**
  Dashboard controller, fetch data from the global object

  @todo Some functions might be better off in the view

  @class DashboardController
  @extends Ember.Controller
  @namespace App
  @module Ember
**/

App.DashboardController = Ember.Object.extend({
    hosts: function() {
        return App.Global.hosts;
    }.property('App.Global.hosts'),
    hostsUnit: function() {
        if (this.get('hosts') === 1) {
            return 'Host'
        } else {
            return 'Hosts'
        }
    }.property('hosts'),
    pools: function() {
        return App.Global.pools;
    }.property('App.Global.pools'),
    poolsUnit: function() {
        if (this.get('pools') === 1) {
            return 'Pool'
        } else {
            return 'Pools'
        }
    }.property('pools'),
    vms: function() {
        return App.Global.vms;
    }.property('App.Global.vms'),
    vmsUnit: function() {
        if (this.get('vms') === 1) {
            return 'VM'
        } else {
            return 'VMS'
        }
    }.property('vms'),
    notfications: function() {
        var notifications = App.Notification.find();
        return notifications;
    }.property('App.Notification.@each'),
    buildVersion: App.Global.version
});

/**
    Dashboard Notification Controller
    Controller for notifications in dashboard, note that to display the notifications in order of appearance they are reversed.

    @todo make a more robust function that always returns events based on date not the sorting of the database itself
    @todo Add functionality for filtering on priority
    @todo Seems the moment.js library does not display the time correctly

    @class DashboardController
    @extends Ember.Controller
    @namespace App
    @module Ember
**/
App.DashboardNotificationsController = Ember.ArrayController.extend({
    selectedPage: 1,
    sortProperties: ['timestamp'],
    sortAscending: false,
    content: this.get('content')
});

App.DashboardNotificationsController = Ember.ArrayController.extend(Ember.PaginationMixin, {
    itemsPerPage: 5
});
