'use strict';

/**
    AddHost Controller - Controller handeling adding new hosts

    @todo: Clean up the old code from the edit
    @todo: Return more usefull feedback to the user than loading.
    @todo: Try to clean up all references to jquery dom selectors

    @class AddHostController
    @extends Ember.Controller
    @namespace App
    @module Ember
**/

App.AddHostController = Ember.Controller.extend(Ember.Validations.Mixin, {
    hostUrl: '',
    hostName: '',
    hostPassword: '',
    checkFields: function() {
        this.validate();
        console.log(this.get('isValid'));
        console.log(this.errors.get('hostUrl'))
    }.observes('hostUrl', 'hostName', 'hostPassword'),
    validations: {
        hostUrl: {
            presence: true,
        },
        hostName: {
            presence: true,
        },
        hostPassword: {
            presence: true,
        }
    },
    reset: function() {
        this.setProperties({
            hostUrl: "",
            hostName: "",
            hostPassword: ""
        });
    },
    errorState: false,
    errorMessage: null,
    feedback: '',
    createServer: function() {
        var self = this;
        var data = this.getProperties('hostUrl', 'hostName', 'hostPassword');

        // Add some serverside checking of variables
        // Validation Mixin Improvements should make this redundant
        if (!$.trim(data.hostUrl) || !$.trim(data.hostName) || !$.trim(data.hostPassword)) {
            var message = '', errorCounter = 0, returnString = '';

            //Set the controller errorState to update the view
            this.set('errorState', true);

            // Personalize error Message
            if(!$.trim(data.hostUrl)) {
                message += 'Host Address';
                errorCounter++;
            }
            if(!$.trim(data.hostName)) {
                if(errorCounter > 0) {
                    message += ', ';
                }
                message += '"Host Name"';
                errorCounter++;
            }
            if(!$.trim(data.hostPassword)) {
                if(errorCounter > 0) {
                    message += ', ';
                }
                message += '"Host Password"';
            }
            return this.set('errorMessage', 'Please make sure the following fields contain values: '+message);
        }

        if(!this.get('errorState')) {

                var _element            = $('.createServerInput');
                var _validationElements = $('.help-inline');
                var _modal              = $('#xac-modal');
                var form                = _element.html();
                var _this               = this;

                //Present the user with a loading screen
                var loading = '<li class="add-host-loading">Loading...</li>';
                 _element.html(loading);


                App.EventsInit(data.hostUrl, data.hostName, data.hostPassword, function(error, result) {
                    if(error) {
                        self.set('errorMessage', error);
                    }
                    else {
                        //Creation is succesfull, resend to the overview.
                        _this.transitionToRoute('dashboard');
                        _modal.modal('hide');
                        _validationElements.html('');
                        //Reset form
                        _element.html(form);
                        _this.set('hostUrl','');
                        _this.set('hostName','');
                        _this.set('hostPassword','');
                    }
                });
        } else {
            // Edit a host, change general settings - See not below currently not in use probably move to a separate file
            var server = this.get('model');
            server.set('hostUrl', hostUrl);
            server.set('hostPassword', hostPassword);
            server.set('hostName', hostName);
            this.get('store').commit();

            server.one('didUpdate', this, function () {
                this.transitionToRoute('servers.index');
            });
        }

        this.set('hostUrl','');
        this.set('hostName','');
        this.set('hostPassword','');
    }
});