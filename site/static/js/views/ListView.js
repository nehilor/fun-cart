define([
  'jquery',
  'underscore',
  'backbone',
  'views/ItemView',
  'collections/items',
  'text!html/fun-list.html'
], function($, _, Backbone, ItemView, ItemsCollection, listTemplate ){

  var ListView = Backbone.View.extend({
    el: $("#fun-list"),

    initialize: function() {
      this.collection.on('sync', this.render, this);
    },

    render: function(){
      var compiledTemplate = _.template( listTemplate );
      $("#fun-list").append(compiledTemplate);
      var itemView = new ItemView({collection: ItemsCollection});
      this.$el.append(itemView.render().el);
    },

  });
  
  return ListView;
  return ItemView;

});