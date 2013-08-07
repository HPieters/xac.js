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

App.OverviewView = Ember.View.extend({
    hasPools: false,
    onPoolsChange: function() {
        this.set('hasPools',this.get('controller.hasPools'));
        this.rerender();
    }.observes("this.controller.hasPools")
})