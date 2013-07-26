'use strict';

App.Global = Ember.Object.extend({
    number: null,
    notifications: 0,
    version: '0.0.2.9-alpha',
    pools: null
});

App.Global = App.Global.create({number: 0, pools: 0});