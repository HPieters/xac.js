App.DashboardRoute = Ember.Route.extend({
    activate: function() {
        $(document).attr('title', 'XAC - Dashboard');
    }
});