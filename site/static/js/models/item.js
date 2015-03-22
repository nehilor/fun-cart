define([
	'underscore', 
	'backbone'
], function(_, Backbone) {

	var ItemModel = Backbone.Model.extend({
 		
 		defaults: {
 			name: '',
 			description: '',
 			path: '',
 			price: 0.00,
 			stock: 0
 		}
 	});
 	return ItemModel;
});
