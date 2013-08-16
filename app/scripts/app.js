/* XAC */
(function (window) {

    'use strict';

    var App = window.App = Ember.Application.create({
        LOG_TRANSITIONS: false,
        currentPath: '',
        ready: function() {
            Ember.debug("[Start]");

        }
    });

    /* Global Router */
    App.Router.map(function () {
        this.route('dashboard', { path: '/' });
        this.resource('servers', { path: '/servers'} ,function() {
            this.route('new');
            //this.resource('view', { path: '/:server_id' }, function() {
            //   this.route('delete', { path: '/delete'});
            ///    this.route('edit', { path: '/edit'});
            //});
        });
        this.route('notifications', { path: '/notifications'});
        this.route('settings', { path: '/settings'});
        this.resource('overview', { path: '/overview'}, function() {
            this.resource('view', { path: '/:pools_id' }, function() {
                this.resource('host', { path: '/:host_id'}, function() {
                    this.route('vm', {path: '/:vm_id'})
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

    App.ViewState = Ember.StateManager.create({
        initialState: 'pool',
        states: {
            pool: Ember.State.create(),
            host: Ember.State.create(),
            vm: Ember.State.create()
        }
    });

})(this);