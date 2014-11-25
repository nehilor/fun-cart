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

var app = app || {};

app.boxModelView = Backbone.View.extend({

	render: function() {
 	    this.collection.each(this.addlistbox, this);
 	    return this;
    },

    addlistbox: function(funtitle) {
 		var boxView = new app.boxTemplateView ({ model: funtitle });
 		this.$el.append(boxView.render().el);
    }

});

