/* XAC */

(function (window) {

    'use strict';

    var version = '0.0.2.4';

    var App = window.App = Ember.Application.create();

    App.Router.map(function () {
        this.route('dashboard', {
            path: '/'
        });
        this.resource('servers', { path: '/servers'} ,function() {
            this.route('new');
            this.route('delete', { path: '/delete/:server_id'});
            this.route('edit', { path: '/edit/:server_id'});
        });
        this.route('notifications', { path: '"notifications'});
        this.route('settings', { path: '/settings'});
        this.route('help', { path: '/help'});
    });


    App.Server = DS.Model.extend({
        hostUrl: DS.attr('string'),
        hostName: DS.attr('string'),
        hostPassword: DS.attr('string')
    });


    /* Routes */

    App.DashboardRoute = Ember.Route.extend({
        activate: function() {
            $(document).attr('title', 'XAC - Dashboard');
        }
    });

    App.ServersRoute = Ember.Route.extend({
        activate: function() {
            $(document).attr('title', 'XAC - Servers');
        }
    });

    App.ServersIndexRoute = Ember.Route.extend({
        model: function() {
            return App.Server.find();
        }
    });

    App.ServersNewRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            this.controllerFor('servers.new').setProperties({isNew:true});
        }
    });

    App.ServersEditRoute = Ember.Route.extend({
        model: function(params) {
            return App.Server.find(params.server_id);
        },
        renderTemplate: function() {
            this.controllerFor('servers.new').update();
            this.render('servers/new')
        },
        setupController: function(controller, model) {
            this.controllerFor('servers.new').setProperties({isNew:false,content:model});
        }
    });

    App.ServersDeleteRoute = Ember.Route.extend({
        model: function(params) {
            return App.Server.find(params.server_id);
        },
        setupController: function(controller, model) {
            this.controllerFor('servers.new').setProperties({isNew:false,content:model});
        }
    })



   App.NotificationsRoute = Ember.Route.extend({
        activate: function() {
            $(document).attr('title', 'XAC - Notifications');
        }
    });

    App.HelpRoute = Ember.Route.extend({
        activate: function() {
            $(document).attr('title', 'XAC - Help');
        }
    });

    App.SettingsRoute = Ember.Route.extend({
        activate: function() {
            $(document).attr('title', 'XAC - Settings');
        }
    });

    App.ApplicationRoute = Ember.Route.extend({
        renderTemplate: function() {
            this.render();
            this.render('menu', {
                outlet: 'menu',
                into: 'application',
                controller: 'menu',

            });
            this.render('footer', {
                outlet: 'footer',
                into: 'application'
            });
        },
        model: function() {
            App.Server.find()
        },
        setupController: function(controller, model, error) {
            controller.set('buildVersion',version)

        }
    });



    App.Global = Ember.Object.extend({
        number: null
    });

    App.Global = App.Global.create({number: 0});

    /* TODO: Seems like a way to complicated way to get this to function, also the problem remains that it wont update */
    App.ApplicationController = Ember.Controller.extend({
        init: function() {
            var element = this;
            App.Server.find({}).then(function(obj) {
                var length = App.Server.all().content.length;
                App.Global.set('number', length);
            })
        }
    })

    App.MenuController = Ember.Object.extend({
        serverCount: function() {
            return App.Global.number;
        }.property('App.Global.number')
    });


    App.ServersNewController = Ember.Controller.extend({
        isNew: true,
        update: function() {
            if(this.isNew) {
                this.set('hostUrl','');
                this.set('hostName','');
                this.set('hostPassword','');
            } else {
                this.set('hostUrl',this.content.get('hostUrl'));
                this.set('hostName',this.content.get('hostName'));
                this.set('hostPassword',this.content.get('hostPassword'));
            }
        }.observes('isNew'),
        createServer: function () {
            var hostUrl = this.get('hostUrl')
            , hostName = this.get('hostName')
            , hostPassword = this.get('hostPassword');

            if (!hostUrl.trim()) { return; }
            if (!hostName.trim()) { return; }
            if (!hostPassword.trim()) { return; }

            if(this.isNew) {
                //Store into record
                var server = App.Server.createRecord({
                    hostUrl: hostUrl,
                    hostName: hostName,
                    hostPassword: hostPassword
                });

                server.store.commit();
            } else {
                console.log('model');
                this.get('model').save();
            }

            //Cleanup
            this.set('hostUrl','');
            this.set('hostName','');
            this.set('hostPassword');


            App.Global.set('number', App.Global.get('number')+1);
            this.transitionToRoute('servers.index');
        }
    });






})(this);