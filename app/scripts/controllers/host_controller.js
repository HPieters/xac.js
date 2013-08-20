App.HostController = Ember.Controller.extend({
    noTemplates: function(){
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            content: this.get('model').get('vms'),
            sortProperties: ['template'],
            sortAscending: true
        });
    }.property('model.vms')
});
