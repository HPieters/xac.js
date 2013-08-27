App.MainView = Ember.View.extend({
    hasHosts: false,
    onHostsChange: function() {
        if(this.get('controller').get('hasHosts') > 0) {
            this.set('hasHosts',true);
        } else {
            this.set('hasHosts',false);
        }
    }.observes("this.controller.hasHosts"),
})