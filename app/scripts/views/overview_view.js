App.OverviewView = Ember.View.extend({
    hasPools: false,
    stateActive: false,
    onStateChange: function() {
        this.set('stateActive',this.get('controller.stateActive'));
    }.observes("this.controller.stateActive"),
    onPoolsChange: function() {
        this.set('hasPools',this.get('controller.hasPools'));
        this.rerender();
    }.observes("this.controller.hasPools")
})

App.ViewView = Ember.View.extend({
    poolActive: true,
    stateActive: false,
    onStateChange: function() {
        if(App.ViewState.get('currentState.name') === 'host') {
            this.set('poolActive',false);
            this.set('stateActive',true);
        } else if(App.ViewState.get('currentState.name') === 'pool') {
            this.set('poolActive',true);
        } else {
            this.set('stateActive',false);
            this.set('poolActive',false);
        }
    }.observes("App.ViewState.currentState.name")
});

App.HostView = Ember.View.extend({
    stateHost: true,
    stateActive: false,
    onStateChange: function() {
        if(App.ViewState.get('currentState.name') === 'vm') {
            this.set('stateHost',false);
            this.set('stateActive',true);
        } else {
            this.set('stateActive',false);
            this.set('stateHost',true);
        }
    }.observes("App.ViewState.currentState.name")
});