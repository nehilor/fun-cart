define([
 'underscore',
 'backbone',
 'models/item'
 ], function(_, Backbone, ItemModel){
 	
 	var ItemsCollection = Backbone.Collection.extend({
 	
 		model: ItemModel,
 		url: '/api/items',

 		initialize: function() {
 			this.collection = new ItemsCollection();
 			this.collection.fetch({reset: true});
 			this.render();
 		}
 	});
});