define([
  'jquery',
  'underscore',
  'backbone',
  'text!html/fun-box.html'
], function($, _, Backbone, boxTemplate ){

  var BoxView = Backbone.View.extend({
    el: $("#fun-box"),

    render: function(){
      
      var compiledTemplate = _.template( boxTemplate );
    
      $("#fun-box").append(compiledTemplate);

    }

  });

  return BoxView;
  
});