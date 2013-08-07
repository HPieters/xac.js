'use strict';

App.Global = Ember.Object.extend({
    hosts: null,
    notifications: 0,
    version: '0.0.2.9-alpha',
    pools: null
});

//Move to more logical position
  App.Global = App.Global.create({hosts: 0, pools: 0})