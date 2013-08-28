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
    model: function() {
        return App.Pools.find();
    },
    redirect: function() {
        if(App.Global.pools > 0) {
           var pool = this.modelFor('main').get('firstObject');
           this.transitionTo('main.pool', pool);
        }
    },
});

App.MainPoolRoute = Ember.Route.extend({
    model: function(params) {
        return App.Pools.find(params.pool_id)
    },
    setupController: function() {
        var poolName = this.modelFor('mainPool').get('poolName')
        this.controllerFor('mainPool').set('model', this.modelFor('mainPool'));
        this.controllerFor('mainHosts').set('model', this.modelFor('mainPool').get('servers'));
        this.controllerFor('mainHosts').set('filter', true)
        this.controllerFor('mainHosts').set('filterName', poolName)
    }
});

App.MainHostRoute = Ember.Route.extend({
    model: function() {
        return App.Server.find()
    }
})

App.HostRoute = Ember.Route.extend({
    model: function(params) {
        return App.Server.find(params.host_id)
    },
    setupController: function() {
        this.controllerFor('host').set('model', this.modelFor('host'))
        this.controllerFor('hostIndex').set('model', this.modelFor('host'))
        this.controllerFor('mainVMs').set('model', this.modelFor('host').get('vms'));
        this.controllerFor('mainVMs').set('filter', true)
        this.controllerFor('mainVMs').set('filterName', this.modelFor('host').get('hostUrl'))
        this.controllerFor('mainVMs').set('filterType', 'host')
    }
});

App.MainVmRoute = Ember.Route.extend({
    model: function(params) {
        return App.VM.find(params.vm_id)
    }
});