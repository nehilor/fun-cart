var app = app || {};

// A group (array) of items models
app.listItemCollection = Backbone.Collection.extend({

  // What type of models are in this collection?
  model: app.listItem,
});

app.boxCollection = Backbone.Collection.extend({

  // What type of models are in this collection?
  model: app.box,
});