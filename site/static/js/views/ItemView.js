define([
  'jquery',
  'underscore',
  'backbone',
  'collections/items',
  'text!html/fun-item.html'
], function($, _, Backbone, ItemCollection, itemTemplate){

  var ItemView = Backbone.View.extend({
    el: $("#fun-item"),

    render: function(){
      
      var compiledTemplate = _.template( itemTemplate );
    
      $("#fun-item").append(compiledTemplate);

    }

  });

  return ItemView;
  
});
