'use strict';

App.Server = DS.Model.extend({
    hostUrl: DS.attr('string'),
    hostName: DS.attr('string'),
    hostPassword: DS.attr('string'),
    pool: DS.belongsTo('App.Pools'),
    version: DS.belongsTo('App.hostVersion')
});

App.hostVersion = DS.Model.extend({
    versionMayor: DS.attr('number'),
    versionMinor: DS.attr('number'),
    build_number: DS.attr('string'),
    date: DS.attr('string'),
    network_backend: DS.attr('string'),
    platform_name: DS.attr('string'),
    platform_version: DS.attr('string'),
    product_brand: DS.attr('string'),
    product_version: DS.attr('string'),
    product_version_text: DS.attr('string'),
    xapi: DS.attr('string'),
    xen: DS.attr('string')
});


