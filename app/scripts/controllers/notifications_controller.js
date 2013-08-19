App.NotificationsController = Ember.ArrayController.extend({
    reverse: function(){
        return this.get('model').toArray().reverse();
    }.property('model.@each')
});
