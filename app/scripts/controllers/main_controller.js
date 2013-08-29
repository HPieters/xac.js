'use strict';

/**
  The controller for the overview

  @class ApplicationController
  @extends Ember.Controller
  @namespace App
  @module Ember
**/

App.MainController = Ember.Controller.extend({
    hasHosts: false,
    init: function() {
        if(App.Global.hosts > 0) {
            this.set('hasHosts',true);
        } else {
            this.set('hasHosts',false);
        }
    }.observes("App.Global.hosts")
});

App.HostController = Ember.Controller.extend({

});

App.HostIndexController = Ember.Controller.extend({});

App.MainPoolsController = Ember.ArrayController.extend({});

App.MainHostsController = Ember.ArrayController.extend({
    filter: false,
    noVms: function() {
        return this.get('content').get('vms').get('length');
    }.property('model.vms.@each'),
    controlDomain: function() {
        var test = this.get('content').get('vms').filterProperty('controlDomain').firstObject();
        console.log(test);
    }.property('model.vms.@each'),
    removeFilter: function() {
        this.set('model',App.Server.find())
        this.set('filter',false)
        if (App.get('currentPath') === "main.pool") {
            this.transitionToRoute('main');
        }

    }
});

App.MainVMsController = Ember.ArrayController.extend({
    noTemplates: function(){
        //Filter on both template and controlDomain
        var vms = this.get('model');
        return vms.filter(function(vm) {
            return !vm.get('template') && !vm.get('controlDomain')
        });
    }.observes('filter').property('model.@each'),
    filter: false,
    removeFilter: function() {
        this.set('model',App.VM.find())
        this.set('filter',false)
        console.log(App.get('currentPath'));
        if (App.get('currentPath') === "main.host.index") {
            this.transitionToRoute('main');
        }

    }
});

