    App.Store = DS.Store.extend({
        // Delete this, not needed with latest version of Ember Data
        revision: 13,
        adapter: DS.LSAdapter.create()
    }) ;
