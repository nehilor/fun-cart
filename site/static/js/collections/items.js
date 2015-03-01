define([
 'underscore',
 'backbone',
 'models/item'
 ], function(_, Backbone, ItemModel){
 	
 	var ItemsCollection = Backbone.Collection.extend({
 	
 		model: ItemModel,
 		url: '/api/items',

 	});
 	
 	var items = new ItemsCollection();
 	items.fetch();

 	console.log(items);
});