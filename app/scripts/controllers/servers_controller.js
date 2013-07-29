
App.ServersIndexController = Ember.ArrayController.extend({
    deleteServer: function(server) {
        server.deleteRecord();
        App.Global.set('number', App.Global.get('number')-1);
        server.save();
    }
});


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

                App.FetchInitial(hostUrl, hostName, hostPassword, function(error, result) {
                    if(error) { console.log(error); }
                    else {

                        var server = App.Server.createRecord({
                            hostUrl: hostUrl,
                            hostName: hostName,
                            hostPassword: hostPassword
                        });
                        var hostVersion = App.hostVersion.createRecord({

                        });

                        var pool = App.Pools.createRecord({
                            poolName:
                        });

                        pool.set('servers',server);
                        server.set('pool',pool);
                        server.set('version',version);

                        App.Global.set('number', App.Global.get('number')+1);

                        server.store.commit();
                        pool.store.commit();

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