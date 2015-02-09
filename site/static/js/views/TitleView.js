define([
  'jquery',
  'underscore',
  'backbone',
  'text!html/fun-title.html'
], function($, _, Backbone, titleTemplate){

  var TitleView = Backbone.View.extend({
    el: $("#fun-title"),

    render: function(){
      
      var compiledTemplate = _.template( titleTemplate );
    
      $("#fun-title").append(compiledTemplate);
    }

  });

  return TitleView;
  
});
