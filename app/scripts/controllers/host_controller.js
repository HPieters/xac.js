App.HostConsoleController = Ember.Object.extend({
    readable: function(obj) {
        return JSON.stringify(obj, 4, 4);
    },
    apiRequest: function() {
        //Disable the query button
        this.set('isProcessing', true)
        // Get host information
        var host    = this.get('content')
        var query    = this.get('query')
        var self    = this;

        //Probably want to start using the session
        var client  = new XenAPI(host.get('hostName'),host.get('hostPassword'),host.get('hostUrl'));

        //Check if the query is empty and if it contains a dot
        if(query != '' && query.indexOf('.') > 0) {
            var split   = query.split('.');
            var group   = split[0];
            var command = split[1];

            // Eventually move to xenapi_api.coffee
            client.init(function(err,res) {
                if(err) {
                    self.set('output',self.readable(err));
                } else {
                     client[group][command](function(err,res) {
                        if (err) {
                            self.set('output', self.readable(err))
                        } else {
                            self.set('output', self.readable(res))
                        }
                        self.set('isProcessing', false)
                    });
                }
            });
        } else {
            this.set('output', 'Invalid input.')
            this.set('isProcessing', false)
        }
    },
    isProcessing: false,
    output: ''
});