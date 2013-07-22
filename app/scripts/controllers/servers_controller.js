
App.ServersIndexController = Ember.ArrayController.extend({
    deleteServer: function(server) {
        server.deleteRecord();
        App.Global.set('number', App.Global.get('number')-1);
        server.save();
    }
});

App.ServersNewController = Ember.Controller.extend({
    getValue: function(val) {
        var error = false;
        var result = this.get('value');

        if(!this.get(val)) {
            error = true;
            console.log(val+' has error')
        }

        this.set(val+"Error", error);
        console.log(val+"Error");

        return result
    },
    validateHostUrl: function() {
        this.getValue('hostUrl')
    },
    validateHostName: function() {
        this.getValue('hostName')
    },
    validateHostPassword: function() {
        this.getValue('hostPassword')
    },
    isNew: true,
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
    createServer: function () {
        var hostUrl = this.get('hostUrl')
        , hostName = this.get('hostName')
        , hostPassword = this.get('hostPassword');

        if (!$.trim(hostUrl)) { return; }
        if (!$.trim(hostName)) { return; }
        if (!$.trim(hostPassword)) { return; }

        if(this.isNew) {
                //Store into record
                var server = App.Server.createRecord({
                    hostUrl: hostUrl,
                    hostName: hostName,
                    hostPassword: hostPassword
                });
                App.Global.set('number', App.Global.get('number')+1);
                server.store.commit();

                server.one('didCreate', this, function () {
                    this.transitionToRoute('servers.index');
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