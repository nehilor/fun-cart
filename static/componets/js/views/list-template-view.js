var app = app || {};
//items on stock template view
app.listItemTemplateView = Backbone.View.extend({

  tagName: "li",
  className: "item",

  template: _.template( $("#list-template").html() ),

  events:{
    'click .fa-plus': 'addCartItem',
  },

  initialize: function() {
    this.listenTo(this.model, 'add', this.filter);
  },

  render: function() {
    var ItemTemplate = this.template(this.model.toJSON());
    this.$el.html(ItemTemplate);
    return this;
  },

  add: function () {},

  filter: function(funcart) {
    cart.trigger('')
  }
});
//items in the cart template view
app.boxTemplateView = Backbone.View.extend({

  tagName: "li",
  className: "boxItem",

  template: _.template( $("#box-template").html() ),

  events:{
    'click .fa-trash': 'clear',
  },  

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    var ItemboxTemplate = this.template(this.model.toJSON());
    this.$el.html(ItemboxTemplate);
    return this;
  },

  clear: function () {
      this.model.destroy();
    }
});
//total template view
app.totalTemplateView = Backbone.View.extend({

  template: _.template( $("#total-template").html()),
  render: function() {
    var displaytotalTemplate = this.template(this.model.toJSON());
    this.$el.html(displaytotalTemplate);
    return this;
  }
})