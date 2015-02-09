var app = app || {};
//items
app.listItem = Backbone.Model.extend({

  defaults: {
    item: "hey hey hey",
    plus: false
  },

  toggle: function () {
	this.save({
		item: !this.get('item')
		});
	}
});
//items-box
app.box = Backbone.Model.extend({

  defaults: {
    item: "Your cart is empty"
  }
});
//total-box
app.total = Backbone.Model.extend({

  defaults: {
    total: "00.00"
  }
});