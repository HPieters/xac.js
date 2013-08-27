/**

                     `
                   ;####.
                `#########+
              ;##############.
           `#######:    '######+
         ;######+         `#######.
      `#######.              :######+
     ######;                    +######
     ###+                         `####
     ##:                            ###
     ##:  `++   ++   ++     ++++    ###
     ##:   ++; ++'  +++.  `++++++   ###
     ##:    ++,++   ++++  ++;  +    ###
     ##:    .+++   '++++  ++        ###
     ##:     +++   ++ .++ ++        ###
     ##:    ++++; :++++++ ++        ###
     ##:   :++ ++ +++++++++++:'++   ###
     ##:   ++  .++++    ++ ++++++   ###
     ##:                            ###
     ##:                            ###
     ####:                        ;####
     +######`                  ,######:
       .######+             `######+
          '######:        '######,
            `#######.  :######+
               ;############.
                  #######'
                    ,##`

  todo: Trigger modal when going to addhost route
**/
(function (window) {

    'use strict';

    var App = window.App = Ember.Application.create({
        LOG_TRANSITIONS: false,
        currentPath: '',
    });

    /* Global Router */
    App.Router.map(function () {
        this.route('dashboard', { path: '/' });
        this.route('notifications', { path: '/notifications'});
        this.route('settings', { path: '/settings'});
        this.resource('overview', { path: '/overview'}, function() {
            this.resource('view', { path: '/:pools_id' }, function() {
                this.resource('host', { path: '/:host_id'}, function() {
                    this.route('vm', {path: '/:vm_id'})
                });
            });
        });
        this.resource('main', { path: 'main' }, function() {
            this.route('pool', { path: '/pool/:pool_id'})

            this.route('vm', { path: '/vm/:vm_id'})
            this.resource('host', { path: '/host/:host_id'}, function() {
                this.route('console', {path: '/console' });
            });
        });
        this.route('addhost', {path: '/addhost' });
    });

    /* App state manger */
    App.ViewState = Ember.StateManager.create({
        initialState: 'pool',
        states: {
            pool: Ember.State.create(),
            host: Ember.State.create(),
            vm: Ember.State.create()
        }
    });




})(this);