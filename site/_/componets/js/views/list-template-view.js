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

var app = app || {};
app.boxTemplateView = Backbone.View.extend({

  tagName: "li",
  className: "boxItem",

  template: _.template( $("#box-template").html() ),

  render: function() {
    var ItemboxTemplate = this.template(this.model.toJSON());
    this.$el.html(ItemboxTemplate);
    return this;
  },
});