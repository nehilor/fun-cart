var app = app || {};
//items on stock collection view
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
//items on cart collection view
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
//total display on car collection view
app.totalModelView = Backbone.View.extend({

    className: "totaldisplay",

    render: function() {
        this.collection.each(this.addtotal, this);
        return this;
    },

    addtotal: function(totalfundisplay) {
        var totalView = new app.totalTemplateView ({ model: totalfundisplay });
        this.$el.append(totalView.render().el);
    }
});
