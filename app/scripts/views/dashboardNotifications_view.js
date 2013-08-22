App.DashboardNotificationsView = Ember.View.extend({
    viewNotifications: false,
    hasNotifications: function() {
        console.log(this.get('change'))
        if(this.get('change') > 0) {
            return true
        } else {
            return false
        }
    }.property('change'),
    getNotifications: function() {
        this.set('change',this.get('controller').get('notifications'));
    }.observes('this.controller.notifications')
});