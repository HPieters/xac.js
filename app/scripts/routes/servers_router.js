App.ServersRoute = Ember.Route.extend({
    activate: function() {
        $(document).attr('title', 'XAC - Servers');
    },
    model: function() {
        return App.Server.find();
    }
});

App.ServersIndexRoute = Ember.Route.extend({
    redirect: function() {
        if(App.Global.hosts > 0) {
            var server = this.modelFor('servers').get('firstObject');
            this.transitionTo('view.index', server);
        }
    }
});

App.ViewIndexRoute = Ember.Route.extend({
    model: function(params) {
        return App.Server.find(params.server_id);
    }
});

App.NewRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('servers.new').setProperties({isNew:true});
    }
});

App.ViewEditRoute = Ember.Route.extend({
    model: function(params) {
        console.log(console.log(this.server_id))
        return App.Server.find(params.server_id);
    },
    renderTemplate: function() {
        this.controllerFor('servers.new').update();
        this.render('view/new')
    },
    setupController: function(controller, model) {
        this.controllerFor('servers.new').setProperties({isNew:false,content:model});
    }
});

App.ViewDeleteRoute = Ember.Route.extend({
    model: function(params) {
        return App.Server.find(params.server_id);
    }
});