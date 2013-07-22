App.MenuController = Ember.Object.extend({
    serverCount: function() {
        return App.Global.number;
    }.property('App.Global.number')
});