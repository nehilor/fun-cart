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

      var itemView = new ItemView();
      itemView.render();
    }
  });

  return ListView;
});
