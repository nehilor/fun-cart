// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'views/TitleView',
  'views/BodyView' 
], function($, _, Backbone, Bootstrap, TitleView, BodyView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var titleView = new TitleView();
        titleView.render();

        var bodyView = new BodyView();
        bodyView.render();

    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
