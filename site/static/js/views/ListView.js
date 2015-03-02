define([
  'jquery',
  'underscore',
  'backbone',
  'collections/items',
  'views/ItemView',
  'text!html/fun-list.html'
], function($, _, Backbone, ItemsCollection, ItemView, listTemplate ){

  var ListView = Backbone.View.extend({
    render: function(){
      // Assume our model exposes the items we will
      // display in our list
      var items = this.model.get('items');
      // Loop through each of our items using the Underscore
      // _.each iterator
      _.each(items, function(item){
      // Create a new instance of the ItemView, passing
      // it a specific model item
        var itemView = new ItemView({ model: item });
        // The itemView's DOM element is appended after it
        // has been rendered. Here, the 'return this' is helpful
        // as the itemView renders its model. Later, we ask for
        // its output ("el")
        this.$el.append( itemView.render().el );

      }, this);
    }
  });
});

    /*el: $("#fun-list"),

    initialize: function(collection) {
      this.collection = collection;
      this.render();
      this.collection.on("reset", this.render, this);
    },
    render: function() {
      this.$el.html("");
      this.collection.each(function(item) {
        this.renderItem(item);
      }, this);
    },
    renderItem: function(item) {
      var itemView = new ItemView({collection: ItemsCollection});
      this.$el.append(itemView.render().el);
    },*/

    /*render: function(){
      
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( listTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }*/

    /*initialize: function(){
      this.collection = new ItemCollection();
      
      // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( listTemplate, { projects: this.collection.models } );
      this.$el.html(compiledTemplate);
    }*/