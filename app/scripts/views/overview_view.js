App.OverviewView = Ember.View.extend({
    hasPools: false,
    onPoolsChange: function() {
        this.set('hasPools',this.get('controller.hasPools'));
        this.rerender();
    }.observes("this.controller.hasPools")
})