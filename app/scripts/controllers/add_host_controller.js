/**
  Controller for adding a new host

  @class
  @extends
  @namespace
  @uses
  @module
**/

App.AddHostController = Ember.Controller.extend({
  isNew: true,
    authFailed: false,
    update: function() {
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
    serverExists: function() {
        //Do check to figure out if the server not already exists...
        console.log('change');
    }.observes('authFailed'),
    createServer: function() {

        var hostUrl = this.get('hostUrl')
        , hostName = this.get('hostName')
        , hostPassword = this.get('hostPassword');

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


                App.EventsInit(hostUrl, hostName, hostPassword, function(error, result) {
                    if(error) {
                        //Handle Error
                        console.log(error);
                    }
                    else {
                        //Creation is succesfull, resend to the overview.
                        _this.transitionToRoute('overview');
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
            //Edit a host, change general settings...
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