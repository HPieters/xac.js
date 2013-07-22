/* XAC */
(function (window) {

    'use strict';

    var App = window.App = Ember.Application.create({
        LOG_TRANSITIONS: true,
    });

    /* Global Router */

    App.Router.map(function () {
        this.route('dashboard', {
            path: '/'
        });
        this.resource('servers', { path: '/servers'} ,function() {
            this.route('new');
            this.route('delete', { path: '/delete/:server_id'});
            this.route('edit', { path: '/edit/:server_id'});
        });
        this.route('notifications', { path: 'notifications'});
        this.route('settings', { path: '/settings'});
    });

    App.ready = function() {
        Ember.debug("Ready run");
    };

})(this);