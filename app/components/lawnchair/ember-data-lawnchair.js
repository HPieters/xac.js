/* 
 * Copyright (c) 2012 Tristan Straub
 */

var get = Ember.get, set = Ember.set;

DS.LawnchairSerializer = DS.JSONSerializer.extend({
    keyForBelongsTo: function(type, name) {
	return this.keyForAttributeName(type, name) + "_id";
    },

    keyForAttributeName: function(type, name) {
	return Ember.String.decamelize(name);
    },

    addBelongsTo: function(hash, record, key, relationship) {
	var id = get(record, relationship.key+'.id');

	if (!Ember.none(id)) { hash[key] = id; }
    },

    addHasMany: function(hash, record, key, relationship) {
	var self = this,
        serializedValues = [],
        id = null;

	key = this.keyForHasMany(relationship.type, key);

	value = record.get(key) || [];

	value.forEach(function(item) {
	    id = get(item, self.primaryKey(item));
	    serializedValues.push(id);
	});

	hash[key] = serializedValues;
    }
});

DS.LawnchairAdapter = DS.Adapter.extend({
    prefix: '',

    backyard: {},

    serializer: DS.LawnchairSerializer,

    getLawnchairForType: function(type) {
	var backyard = this.get('backyard');
	var lc = backyard[type.toString()];
	if (typeof lc === 'undefined') {
	    var dbName = this.get('prefix') + type.toString();
	    lc = Lawnchair({name:dbName}, function(store){});
	    backyard[type.toString()] = lc;
	}
	return lc;
    },

    generateIdForRecord: function(store, record) {
	return UUIDjs.create().toString();
    },

    createRecord: function(store, type, record) {
	var root = this.rootForType(type);

	var data = {};
	data[root] = this.serialize(record, { includeId: true });

	var lc = this.getLawnchairForType(type);
	var _self = this;

	lc.save({key: record.get('id'), data: data}, function(){
	    _self.didCreateRecord(store, type, record, data);
	});
    },

    didSaveRecord: function(store, record, hash) {
	record.eachRelationship(function(name, meta) {
	    if (meta.kind === 'belongsTo') {
		store.didUpdateRelationship(record, name);
	    }
	});

	store.didSaveRecord(record, hash);
    },

    didCreateRecord: function(store, type, record, json) {
	var root = this.rootForType(type);
	this.didSaveRecord(store, record, json[root]);
    },

    updateRecord: function(store, type, record) {
	var root = this.rootForType(type);

	var data = {};
	data[root] = this.serialize(record, { includeId: true });

	var lc = this.getLawnchairForType(type);
	var _self = this;

	lc.save({key: record.get('id'), data: data}, function(){
	    _self.didUpdateRecord(store, type, record, data);
	});
    },

    didUpdateRecord: function(store, type, record, json) {
	var root = this.rootForType(type);

	this.didSaveRecord(store, record, json && json[root]);
    },

    deleteRecord: function(store, type, record) {
	var lc = this.getLawnchairForType(type);
	var _self = this;
	var id = record.get('id');
	lc.remove(id, function() {
	    _self.didDeleteRecord(store, type, record);
	});
    },

    didDeleteRecord: function(store, type, record, json) {
	this.didSaveRecord(store, record);
    },

    find: function(store, type, id) {
	var lc = this.getLawnchairForType(type);
	var _self = this;
	lc.get(id, function(json) {
	    _self.didFindRecord(store, type, json.data, id);
	});
    },

    didFindRecord: function(store, type, json, id) {
	var root = this.rootForType(type);

	store.load(type, id, json[root]);
    },

    findAll: function(store, type, since) {
	var singular = this.rootForType(type)
	var root = this.pluralize(singular);

	var lc = this.getLawnchairForType(type);
	var _self = this;
	lc.all(function(values) {
	    var data = {};
	    data[root] = values.mapProperty('data').mapProperty(singular);

	    _self.didFindAll(store, type, data);
	});
    },

    didFindAll: function(store, type, json) {
	var root = this.pluralize(this.rootForType(type));

	store.loadMany(type, json[root]);

	store.didUpdateAll(type);
    },

    // HELPERS

    plurals: {},

    // define a plurals hash in your subclass to define
    // special-case pluralization
    pluralize: function(name) {
	return this.plurals[name] || name + "s";
    },

    rootForType: function(type) {
	if (type.url) { return type.url; }

	// use the last part of the name as the URL
	var parts = type.toString().split(".");
	var name = parts[parts.length - 1];
	return name.replace(/([A-Z])/g, '_$1').toLowerCase().slice(1);
    }
});

