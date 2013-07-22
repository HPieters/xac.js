'use strict';

App.ServersView = Ember.View.extend({
    templateName: 'servers'
});

App.ValidateTextField = Ember.TextField.extend({
    focusOut: function() {
        var controller = this.get('controller');
        console.log(controller);
        var viewName = this.get('viewName');
        var validatorName = Ember.String.classify(viewName);
        controller["validate"+validatorName]()
    }
});