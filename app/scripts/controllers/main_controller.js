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
  test: function() {
    console.log(this.get('content'));
    return this.get('model')
  }.property('model')
});

App.HostIndexController = Ember.Controller.extend({});

App.MainPoolsController = Ember.ArrayController.extend({});

App.MainHostsController = Ember.ArrayController.extend({
    noVms: function() {
        return this.get('content').get('vms').get('length');
    }.property('model.vms.@each'),
    controlDomain: function() {
        var test = this.get('content').get('vms').filterProperty('controlDomain').firstObject();
        console.log(test);
    }.property('model.vms.@each')
});

App.MainVMsController = Ember.ArrayController.extend({
    noTemplates: function(){
        return this.get('model').filterProperty('template',false);
    }.property('model.@each'),
    loading: function() {
        if(this.get('content.isLoaded')) {
          console.log('done loading');
        }
    }.property('content.isLoaded')
});

