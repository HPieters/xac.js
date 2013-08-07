'use strict';

App.Pools = DS.Model.extend({
    poolUUID: DS.attr('string'),
    poolName: DS.attr('string'),
    servers: DS.hasMany('App.Server'),
    serverCount: function() {
        var servers = this.get('servers');
        return servers.get('length');
    }.property('servers.@each')
});