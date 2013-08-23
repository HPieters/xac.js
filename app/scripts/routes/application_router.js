/**
  Application route for XAC

  @class ApplicationRoute
  @extends Ember.Route
  @namespace App
  @module App
**/

App.ApplicationRoute = Ember.Route.extend({
    events: {
        addHost: function() {
            App.Route.showModal(this, 'addHost');
        },
        closeModal: function() {
            this.render('hide_modal', {into: 'modal', outlet: 'modalBody'})
        }
    },
    renderTemplate: function() {
        this.render();
        this.render('menu', {
            outlet: 'menu',
            into: 'application',
            controller: 'menu',
        });
    },
    setupController: function(controller, model, error) {
        controller.set('buildVersion',App.Global.get('version'))
    },
    activate: function(){
        App.Scheduler()
    },
    deactivate: function(){
        // Make this optional in the settings menu
        App.Scheduler.stop();
    }
});
