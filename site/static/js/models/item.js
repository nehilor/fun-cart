define([
	'underscore', 
	'backbone'
], function(_, Backbone) {

	var ItemModel = Backbone.Model.extend({
 		
 		defaults: {
 			name: 'no items yet',
 			price: 0.00,
 			stock: 0
 		},

 	});
 	return ItemModel;
});