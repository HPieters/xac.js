/* XAC */
(function (window) {

    'use strict';

    var App = window.App = Ember.Application.create({
        LOG_TRANSITIONS: false,
        ready: function() {
            Ember.debug("[Start]");
            App.ScheduleEventRetrieval
        }
    });

    /* Global Router */
    App.Router.map(function () {
        this.route('dashboard', { path: '/' });
        this.resource('servers', { path: '/servers'} ,function() {
            this.route('new');
            this.resource('view', { path: '/:server_id' }, function() {
                this.route('delete', { path: '/delete'});
                this.route('edit', { path: '/edit'});
            });
        });
        this.route('notifications', { path: '/notifications'});
        this.route('settings', { path: '/settings'});
        this.resource('overview', { path: '/overview/'}, function() {
            this.route('view', { path: '/:pools_id'}),
            this.resource('server', { path: '/server' }, function() {
                this.resource('vm', {path: '/vm'}, function() {
                    this.route('new')
                });
            });
        });
        this.route('addhost', {path: '/addhost' });
    });

    App.OverviewPoolsRoute = Ember.Route.extend({
        activate: function() {
            $(document).attr('title', 'XAC - Overview - Pool');
        },
    })

})(this);