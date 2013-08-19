'use strict';

// No longer used
App.Focusable = Ember.Mixin.create({
    focused: false,
    focusIn: function(event) {
        return this.set('focused',true)
    },
    focusOut: function(event) {
        return this.set('focused',false)
    }
});

//No longer used
App.AsyncValidation = Ember.Mixin.create({
    valid: function() {
        var value,
        _this = this;

        if (this.get('focused')) {
            this.set('code', '');
            return this.set('message', '');
        } else {
            value = this.get('value');
            return this.validate(value, function(code, message) {
                if (value === _this.get('value') && !_this.get('focused')) {
                    _this.set('code', code);
                    return _this.set('message', message);
                }
            });
        }
    }.observes('focused'),
    validate: function(value, next) {
        return next('',"")
    }
});

//No longer used
App.TextField = Ember.View.extend(App.Focusable, App.AsyncValidation, {
    classNames: ['control-group'],
    type: 'text',
    value: '',
    placeholder: '',
    code: '',
    classNameBindings: ['code'],
    message: '',
    template: Ember.Handlebars.compile("<div class=\"controls\" >\n{{view Ember.TextField\nplaceholderBinding = \"view.placeholder\"\nvalueBinding = \"view.value\"\ntypeBinding = \"view.type\"\n  }}\n <span class=\"help-inline\">{{view.message}}</span>\n</div>")
});

App.ValidateTextField = App.TextField.extend({
    validate: function(value, status) {
        if (value.length === 0) {
            return status('error', "Please enter a value.");
        } else {
            return status('success', "Ok.");
        }
    }
});

App.HostUrlField = App.TextField.extend({
    placeholder: "IP Address",
    validate: function(value, status) {
        if (value.length === 0) {
            return status('error', "Please enter a valid url");
        } else {
            status('loading',"One moment while we check the adress.");
            console.log(value);
            var client = new XenAPI('','',value);
            return client.init(function(error, result) {
                if(error) {
                    status('error',"Host could not be found");
                } else {
                    status('success',"Found XENAPI instance!");
                }
            });
        }
    }
});

// No long used
App.LinkView = Ember.View.extend({
    tagName: 'li',
    classNameBindings: ['active'],
    active: Ember.computed(function() {
      var router = this.get('router'),
      route = this.get('route'),
      model = this.get('content');
      var params = [route];

      if(model){
        params.push(model);
      }

      return router.isActive.apply(router, params);
    }).property('router.url'),
    router: Ember.computed(function() {
      return this.get('controller').container.lookup('router:main');
    }),
    click: function(){
        var router = this.get('router'),
        route = this.get('route'),
        model = this.get('content');
        params = [route];

        if(model){
            params.push(model);
        }

        router.transitionTo.apply(router,params);
    }
});