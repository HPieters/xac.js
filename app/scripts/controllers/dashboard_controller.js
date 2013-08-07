App.DashboardController = Ember.Object.extend({
    servers: function() {
        return App.Global.hosts;
    }.property('App.Global.hosts'),
    pools: function() {
        return App.Global.pools;
    }.property('App.Global.pools')
});