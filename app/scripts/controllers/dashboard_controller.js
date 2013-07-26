App.DashboardController = Ember.Object.extend({
    servers: function() {
        return App.Global.number;
    }.property('App.Global.number'),
    pools: function() {
        return App.Global.pools;
    }.property('App.Global.pools')
});