'use strict';


App.Server = DS.Model.extend({
    uuid: DS.attr('string'),
    hostUrl: DS.attr('string'),
    hostName: DS.attr('string'),
    hostPassword: DS.attr('string'),
    hostToken: DS.attr('string'),
    pool: DS.belongsTo('App.Pools'),
    version: DS.belongsTo('App.hostVersion'),
    vms: DS.hasMany('App.VM'),
    vmsCount: function() {
        var vms = this.get('vms').filterProperty('template',false);
        return vms.get('length');
    }.property('vms.@each')
});

App.hostVersion = DS.Model.extend({
    versionMayor: DS.attr('string'),
    versionMinor: DS.attr('string'),
    buildNumber: DS.attr('string'),
    date: DS.attr('string'),
    networkBackend: DS.attr('string'),
    platformName: DS.attr('string'),
    platformVersion: DS.attr('string'),
    productBrand: DS.attr('string'),
    productVersion: DS.attr('string'),
    productVersionText: DS.attr('string'),
    xapi: DS.attr('string'),
    xen: DS.attr('string')
});

App.VMConsole = DS.Model.extend({
    vm: DS.belongsTo('App.VM')
});

App.VM = DS.Model.extend({
    uuid: DS.attr('string'),
    template: DS.attr('boolean'),
    controlDomain: DS.attr('boolean'),
    power_state: DS.attr('string'),
    name: DS.attr('string'),
    description: DS.attr('string'),
    vcpuStartup: DS.attr('number'),
    vcpuMax: DS.attr('number'),
    memory_dynamic_max: DS.attr('number'),
    memory_dynamic_min: DS.attr('number'),
    memory_overhead: DS.attr('number'),
    memory_static_max: DS.attr('number'),
    memory_static_min: DS.attr('number'),
    memory_target: DS.attr('number'),
    metrics: DS.attr('string'),
    console: DS.belongsTo('App.VMConsole'),
    host: DS.belongsTo('App.Server')
});