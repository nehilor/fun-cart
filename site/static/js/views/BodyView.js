define([
  'jquery',
  'underscore',
  'backbone',
  'views/ListView',
  'views/BoxView',
  'text!html/fun-body.html'
], function($, _, Backbone, ListView, BoxView, bodyTemplate ){

  var BodyView = Backbone.View.extend({
    el: $("#fun-body"),

    render: function(){
      
      var compiledTemplate = _.template( bodyTemplate );
    
      $("#fun-body").append(compiledTemplate);

      var listView = new ListView();
      listView.render();

      var boxView = new BoxView();
      boxView.render();

    }

  });

  return BodyView;
  
});
