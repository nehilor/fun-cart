 // Namespace our flowerApp
var app = app || {};

app.listItemModelView = Backbone.View.extend({


  className: "item",

  render: function() {
 	  this.collection.each(this.additem, this);
 		return this;
  },

 addText: function(item) {
 		var listItemModelView = new app.listItemTemplateView ({ model: item });
 		this.$el.append(listItemModelView.render().el);
 }

});