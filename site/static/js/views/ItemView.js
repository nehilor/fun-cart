define([
  'jquery',
  'underscore',
  'backbone',
  'models/item',
  'collections/item',
  'text!html/fun-item.html'
], function($, _, Backbone, ItemModel, ItemCollection, itemTemplate){

  var ItemView = Backbone.View.extend({
    el: $("#fun-item"),
    
    initialize: function(){
      this.collection = new ItemCollection();
      
      var compiledTemplate = _.template( itemTemplate, { items: this.collection.models });
      this.$el.html(compiledTemplate);
    },

  //  render: function(){
      
  //    var compiledTemplate = _.template( itemTemplate );
  //    $("#fun-item").append(compiledTemplate);
  //  }

  });

  return ItemView;
  
});
