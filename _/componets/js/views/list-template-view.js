var app = app || {};

app.listItemTemplateView = Backbone.View.extend({

  
  tagName: "li",

  template: _.template( $("#list-template").html() ),

  render: function() {
    var ItemTemplate = this.template(this.model.toJSON());
    this.$el.html(ItemTemplate);
    return this;
  },

  

});