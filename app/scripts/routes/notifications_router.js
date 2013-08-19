   App.NotificationsRoute = Ember.Route.extend({
        activate: function() {
            $(document).attr('title', 'XAC - Notifications');
        },
        model: function() {
            return App.Notification.find()
        }
    });