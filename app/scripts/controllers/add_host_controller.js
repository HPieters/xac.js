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

App.AddHostController = Ember.Controller.extend({
    isNew: true,
    authFailed: false,
    update: function() {
        // Currently this functionality is not used since the edit functionality is broken
        if(this.isNew) {
            this.set('hostUrl','');
            this.set('hostName','');
            this.set('hostPassword','');
        } else {
            this.set('hostUrl',this.content.get('hostUrl'));
            this.set('hostName',this.content.get('hostName'));
            this.set('hostPassword',this.content.get('hostPassword'));
        }
    }.observes('isNew'),
    reset: function() {
        this.setProperties({
            hostUrl: "",
            hostName: "",
            hostPassword: ""
        });
    },
    errorMessage: null,
    feedback: function() {
        return 'Feedback2'
    }.property('feedback'),
    createServer: function() {
        var self = this;
        var data = this.getProperties('hostUrl', 'hostName', 'hostPassword');

        if (!$.trim(hostUrl)) { return; }
        if (!$.trim(hostName)) { return; }
        if (!$.trim(hostPassword)) { return; }

        if(this.isNew) {

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