var app = app || {};

// A group (array) of items models 
app.listItemCollection = Backbone.Collection.extend({

  // What type of models are in this collection?
  model: app.listItem,
  //localStorage: new Backbone.LocalStorage('cart-backbone'),
  item: function(){
  	return this.where({plus: true})
  }
});

app.boxCollection = Backbone.Collection.extend({

  // What type of models are in this collection?
  model: app.box,
});

app.totalCollection = Backbone.Collection.extend({
	model: app.total,
});

