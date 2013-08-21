App.HostController = Ember.Controller.extend({
    noTemplates: function(){
        console.log(this.get('model').get('vms').filterProperty('template', false));
        return this.get('model').get('vms').filterProperty('template',false);
    }.property('model')
});
