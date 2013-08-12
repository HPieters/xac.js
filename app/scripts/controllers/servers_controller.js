
App.ServersController = Ember.ArrayController.extend({
    hasHosts: false,
    init: function() {
        var _this = this;
        if(App.Global.hosts > 0) {
            _this.set('hasHosts',true);
        } else {
            _this.set('hasHosts',false);
        }
    }.observes("App.Global.hosts")
});




App.ServersIndexController = Ember.ArrayController.extend({
    deleteServer: function(server) {
        server.deleteRecord();
        App.Global.set('hosts', App.Global.get('hosts')-1);
        server.save();
    }
});

/*
App.ServersNewController = Ember.Controller.extend(Ember.Evented,{
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
                //Store into record
                $('.createServerInput input').attr('disabled','disabled');
                var _this = this;
                var _element = $('.createServerInput input');

                App.EventsInit(hostUrl, hostName, hostPassword, function(error, result) {
                    if(error) {
                        //Handle Error
                        console.log(error);
                    }
                    else {
                        //Creation is succesfull, continue.
                        _this.set('hostUrl','');
                        _this.set('hostName','');
                        _this.set('hostPassword','');

                        server.one('didCreate', this, function () {
                            _element.removeAttr('disabled');
                            _this.transitionToRoute('servers.index');
                            $('#add-server').val('Add Server');
                        });
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
*/