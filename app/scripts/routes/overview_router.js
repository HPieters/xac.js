App.OverviewRoute = Ember.Route.extend({

    activate: function() {
        $(document).attr('title', 'XAC - Overview');
    },
    model: function() {
        return App.Pools.find();
    }
});

App.OverviewIndexRoute = Ember.Route.extend({
    redirect: function() {
        if(App.Global.pools > 0) {
           var pool = this.modelFor('overview').get('firstObject');
           this.transitionTo('view', pool);
        }
    },
});

App.ViewRoute = Ember.Route.extend({
    model: function(params) {
        return App.Pools.find(params.pools_id);
    }
});

App.HostRoute = Ember.Route.extend({
    model: function(params) {
        return App.Server.find(params.host_id);
    }
});

App.HostVmRoute = Ember.Route.extend({
    model: function(params) {
        return App.VM.find(params.vm_id);
    }
});