



App.MainPoolsController = Ember.ArrayController.extend({

});

App.MainHostsController = Ember.ArrayController.extend({
    noVms: function() {
        return this.get('content').get('vms').get('length');
    }.property('model.vms.@each'),
    controlDomain: function() {
        var test = this.get('content').get('vms').filterProperty('controlDomain').firstObject();
        console.log(test);
    }.property('model.vms.@each')
});

App.MainVMsController = Ember.ArrayController.extend({
    noTemplates: function(){
        return this.get('model').filterProperty('template',false);
    }.property('model.@each')
});