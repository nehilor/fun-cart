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

    render: function(){
      
      var compiledTemplate = _.template( listTemplate );
    
      $("#fun-list").append(compiledTemplate);
      var itemView = new ItemView({collection: ItemsCollection});
      itemView.render();
      
    },
  });
  return ListView;
  return ItemView;

});


















/****
    render: function(){
      
      var compiledTemplate = _.template( listTemplate );
    
      $("#fun-list").append(compiledTemplate);
      this.collection_.each(function(item){

        var itemView = new ItemView({model: item});
        element.append(itemView.render().el);

      });
      
    },
****/