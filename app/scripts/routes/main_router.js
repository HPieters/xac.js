App.MainRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render();
        this.render('mainPools', {
            outlet: 'pools',
            into: 'main',
            controller: this.controllerFor('mainPools')
        });
        this.render('mainHosts', {
            outlet: 'hosts',
            into: 'main',
            controller: this.controllerFor('mainHosts')
        });
        this.render('mainVMs', {
            outlet: 'vms',
            into: 'main',
            controller: this.controllerFor('mainVMs')
        });
    },
    setupController: function() {
        var poolsModel = App.Pools.find();
        this.controllerFor('mainPools').set('model', poolsModel);

        var hostsModel = App.Server.find();
        this.controllerFor('mainHosts').set('model', hostsModel);

        var vmsModel = App.VM.find();
        this.controllerFor('mainVMs').set('model', vmsModel);
    },
    redirect: function() {
        if(App.Global.pools > 0) {
           var pool = this.controllerFor('mainPools').get('firstObject');
           this.transitionTo('main.pool', pool);
        }
    },
});


App.MainPoolRoute = Ember.Route.extend({
    model: function(params) {
        return App.Pools.find(params.pool_id)
    }
});

App.MainHostRoute = Ember.Route.extend({
    model: function(params) {
        return App.Server.find(params.host_id)
    }
});

App.MainVmRoute = Ember.Route.extend({
    model: function(params) {
        return App.VM.find(params.vm_id)
    }
});