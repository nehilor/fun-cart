var app = app || {};

app.listItem = Backbone.Model.extend({

  defaults: {
    item: "hey hey hey"
  }
});

app.box = Backbone.Model.extend({

  defaults: {
    name: "Your FUN CART"
  }
});