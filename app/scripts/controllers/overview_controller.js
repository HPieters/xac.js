App.OverviewController = Ember.ArrayController.extend({
    hasPools: false,
    init: function() {
        var _this = this;
        if(App.Global.pools > 0) {
            _this.set('hasPools',true);
        } else {
            _this.set('hasPools',false);
        }
    }.observes("App.Global.pools")
});

