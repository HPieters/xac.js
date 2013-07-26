App.ApplicationRoute = Ember.Route.extend({
    renderTemplate: function() {
            this.render();
            this.render('menu', {
                outlet: 'menu',
                into: 'application',
                controller: 'menu',

            });
            this.render('footer', {
                outlet: 'footer',
                into: 'application'
            });
        },
    setupController: function(controller, model, error) {
        controller.set('buildVersion',App.Global.get('version'))
    }
});