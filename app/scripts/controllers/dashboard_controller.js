'use strict';

/**
  Dashboard controller, fetch data from the global object

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
    }.property('App.Notification.@each')
});

App.DashboardNotificationsController = Ember.ArrayController.extend({
    reverse: function(){
        return this.get('model').toArray().reverse();
    }.property('model.@each')
});
