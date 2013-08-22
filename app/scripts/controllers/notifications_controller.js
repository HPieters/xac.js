App.NotificationsController = Ember.ArrayController.extend({
    hasHosts: false,
    init: function() {
        if(App.Global.get('hosts') > 0) {
            this.set('hasHosts',true);
        } else {
            this.set('hasHosts',false);
        }
    }.observes('App.Global.hosts'),
    reverse: function(){
        return this.get('model').toArray().reverse();
    }.property('model.@each')
});
