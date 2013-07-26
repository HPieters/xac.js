App.DashboardRoute = Ember.Route.extend({
    activate: function() {
        $(document).attr('title', 'XAC - Dashboard');
    },
    setupController: function(controller, model, error) {
        controller.set('buildVersion',App.Global.get('version'))
    }
});