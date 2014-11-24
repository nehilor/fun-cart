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

app.boxModelView = Backbone.View.extend({

    className: "box",
  
    render: function() {
 	    this.collection.each(this.addtitlebox, this);
 	    return this;
    },

    addtitlebox: function(funtitle) {
 		var boxView = new app.boxTemplateView ({ model: funtitle });
 		this.$el.append(boxView.render().el);
    }

});

