App.ServersRoute = Ember.Route.extend({
    activate: function() {
        $(document).attr('title', 'XAC - Servers');
    }
});

App.ServersIndexRoute = Ember.Route.extend({
    model: function() {
        return App.Server.find();
    }
});


App.ServersNewRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('servers.new').setProperties({isNew:true});
    }
});

App.ServersEditRoute = Ember.Route.extend({
    model: function(params) {
        return App.Server.find(params.server_id);
    },
    renderTemplate: function() {
        this.controllerFor('servers.new').update();
        this.render('servers/new')
    },
    setupController: function(controller, model) {
        this.controllerFor('servers.new').setProperties({isNew:false,content:model});
    }
});

App.ServersDeleteRoute = Ember.Route.extend({
    model: function(params) {
        return App.Server.find(params.server_id);
    },
    setupController: function(controller, model) {
        this.controllerFor('servers.new').setProperties({isNew:false,content:model});
    }
});