App.MenuController = Ember.Controller.extend({
    serverCount: function() {
        return App.Global.hosts;
    }.property('App.Global.hosts'),
    notifications: function() {
        return App.Global.notifications;
    }.property('App.Global.notifications')
});