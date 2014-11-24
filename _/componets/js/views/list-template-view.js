var app = app || {};

app.listItemTemplateView = Backbone.View.extend({

  tagName: "li",
  className: "item",

  template: _.template( $("#list-template").html() ),

  render: function() {
    var ItemTemplate = this.template(this.model.toJSON());
    this.$el.html(ItemTemplate);
    return this;
  },
});

app.boxTemplateView = Backbone.View.extend({

  template: _.template( $("#box-template").html() ),

  render: function() {
    var boxTemplate = this.template(this.model.toJSON());
    this.$el.html(boxTemplate);
    return this;
  },
});