var application_root = _dirname,
	express = requir ( 'express'), 
	path = require( 'path'),
	mongoose = require('mongoose');

var app = express();

app.configure( function(){

	app.use( express.dodyParser() );
	app.use( express.methodOverride() );
	app.use( app.router );
	app.use( express.static(path.join( application_root, 'site')));
	app.use( express.errorHandler({ dempExceptions: true, showStack: true }));
});

//start server

var port = 4711;
app.listen( port, function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env );
});