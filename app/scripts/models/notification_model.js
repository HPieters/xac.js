'use strict';

App.Notification = DS.Model.extend({
    uuid: DS.attr('string'),
    name: DS.attr('string'),
    category: DS.attr('string'),
    body: DS.attr('string'),
    priority: DS.attr('string'),
    referenceUuid: DS.attr('string'),
    timestamp: DS.attr('string')
});