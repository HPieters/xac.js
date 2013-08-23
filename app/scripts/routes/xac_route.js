/**
  Extend Route to handle modals

  @class ApplicationRoute
  @extends Ember.Route
  @namespace App
  @module App
**/

App.Route = Em.Route.extend({
    /**
        Called each time we enter a route in XAC.

        @method activate
    **/
    activate: function(router, context) {
        this._super();
    }
});

/**
    Reopen Class to add showModal function
**/

App.Route.reopenClass({
    showModal: function(router, name, model) {
        router.controllerFor('modal').set('modalClass', null);
        router.render(name, {
            outlet: "modalBody",
            into: 'modal'
        })
        var controller = router.controllerFor(name);
        if (controller) {
            // Set model if there is a model send to the showModal
            if (model) {
                controller.set('model', model)
            }
            // Execute onShow if there is any.
            if(controller && controller.onShow) {
                Ember.debug('show');
                controller.onShow();
            }
        }
    }
});