'use strict';

App.Global = Ember.Object.extend({
    hosts: null,
    notifications: 0,
    version: '0.0.3.0-alpha',
    pools: null,
    vms: null
});

//Move to more logical position
App.Global = App.Global.create({hosts: 0, pools: 0, vms: 0})