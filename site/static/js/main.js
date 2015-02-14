/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: [
				'jquery'
			],
			exports: 'Bootstrap'
		}
	},
	paths: {
		jquery: 'libs/jquery/jquery-min',
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone-min',
		bootstrap: 'libs/bootstrap/bootstrap-min',
		templates: '../html',
		text: 'text',
	}
});

require([
  // Load our app module and pass it to our definition function
   'app'
  ],function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
