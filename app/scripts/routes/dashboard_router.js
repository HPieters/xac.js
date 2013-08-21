App.DashboardRoute = Ember.Route.extend({
    activate: function() {
        $(document).attr('title', 'XAC - Dashboard');
    },
    setupController: function(controller, model, error) {
        controller.set('buildVersion',App.Global.get('version'))
    },
    renderTemplate: function() {
        this.render();
        this.render('dashboardNotifications', {
            outlet: 'notifications',
            into: 'dashboard',
            controller: 'notifications'
        });
    },
});


App.DashboardNotificationsRoute = Ember.Route.extend({
    model: function() {
        return App.Notification.find();
    }
});

