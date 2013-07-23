App.MenuController = Ember.Object.extend({
    serverCount: function() {
        return App.Global.number;
    }.property('App.Global.number'),
    notifications: function() {
        return App.Global.notifications;
    }.property('App.Global.notifications')
});