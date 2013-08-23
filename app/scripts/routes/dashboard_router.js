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
            controller: this.controllerFor('dashboardNotifications')
        });
    },
    setupController: function(controller) {
        var notificationModel = App.Notification.find({});

        this.controllerFor('dashboardNotifications').set('content', notificationModel)
        var _this = this
        notificationModel.on('didLoad', function() {
            _this.controllerFor('dashboardNotifications').set('notifications', notificationModel.get('length'));
        });

    }
});

