App.OverviewController = Ember.ArrayController.extend({
    hasPools: false,
    stateActive: false,
    onStateChange: function() {
        var _this = this;
        if(App.ViewState.get('currentState.name') === 'pool') {
            _this.set('stateActive',true);
        } else {
            _this.set('stateActive',false);
        }
    }.observes("App.ViewState.currentState.name"),
    init: function() {
        var _this = this;
        if(App.Global.pools > 0) {
            _this.set('hasPools',true);
        } else {
            _this.set('hasPools',false);
        }
        this.onStateChange();
    }.observes("App.Global.pools")
});

