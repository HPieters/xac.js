'use strict';

App.Server = DS.Model.extend({
    hostUrl: DS.attr('string'),
    hostName: DS.attr('string'),
    hostPassword: DS.attr('string'),
    versionMayor: DS.attr('number'),
    versionMinor: DS.attr('number'),
    version: DS.attr('string')
});

