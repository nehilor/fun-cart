 // Namespace our flowerApp
var app = app || {};

app.listItemModelView = Backbone.View.extend({

  className: "list",
  tagName: "ul",

  render: function() {
 	  this.collection.each(this.addItem, this);
 		return this;
  },

 addItem: function(list) {
 		var listItemView = new app.listItemTemplateView ({ model: list });
 		this.$el.append(listItemView.render().el);
 }

});