'use strict';

/**
    Validation Mixin

    @todo: Use general purpose mixin instead of per field
    @todo: Full form check next to single fields.

    @class TextField
    @extends Ember.View.extend
    @namespace App
    @module Ember
**/

App.TextField = Ember.View.extend({
    classNames: ['control-group'],
    type: 'text',
    value: '',
    placeholder: '',
    code: '',
    classNameBindings: ['code'],
    message: '',
    template: Ember.Handlebars.compile("<div class=\"controls\" >\n{{view Ember.TextField\nplaceholderBinding = \"view.placeholder\"\nvalueBinding = \"view.value\"\ntypeBinding = \"view.type\"\n  }}\n <span class=\"help-inline\">{{view.message}}</span>\n</div>")
});


/**
    Validation Mixin - Single textfield

    @class ValidateTextField
    @extends App.TextField
    @namespace App
    @module App
**/

App.ValidateTextField = App.TextField.extend({
    validate: function(value, status) {
        if (value.length === 0) {
            return status('error', "Please enter a value.");
        } else {
            return status('success', "Ok.");
        }
    }
});

/**
    Validation Mixin - Provide additional feedback to check if the actual XenServer can be found in the network.

    @todo: Move the check into a general purpose XenAPI library.

    @class HostUrlField
    @extends App.TextField
    @namespace App
    @module App
**/


App.HostUrlField = App.TextField.extend({
    placeholder: "IP Address",
    validate: function(value, status) {
        if (value.length === 0) {
            return status('error', "Please enter a valid url");
        } else {
            status('loading',"One moment while we check the adress.");
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

