//Molude dependecies.
var application_root = __dirname,
	express = require( 'express' ), //web framework
	path = require( 'path' ), //Utilities for dealing with file paths
	mongoose = require( 'mongoose' ); //MongoDB interation

//Create Server
var app = express();

//Configure Server
app.configure(function(){
	//parses request body and populates request.body
	app.use( express.bodyParser() );

	//checks request.body for HTTP methos overrides
	app.use( express.methodOverride() );

	//perform route lookup based on URL and HTTP method
	app.use( app.router );

	//where to serve static content
	app.use( express.static( path.join( application_root, 'site' ) ) );

	//show all erros in development
	app.use( express.errorHandler({ dumpExceptions: true, showStack: true}) );
});

//start server yay
var port = 4711;
app.listen( port, function() {
	console.log('Express server listening on port %d in %s mode', port, app.settings.env );
});

//routes
app.get( '/api', function( request, response ) {
	response.send( 'Our cart is running');
});

//connect to database
mongoose.connect( 'mongodb://localhost/cart_database' );

//schemas
var Item = new mongoose.Schema({
	name: String,
	description: String,
	price: Number,
	path: String,
	stock: Number
});

//models
var ItemModel = mongoose.model( 'Item', Item );

//get a list of all items ---done
app.get( '/api/items', function( request, response ) {
	return ItemModel.find( function( err, items ){
		if( !err ) {
			return response.send( items );
		} else {
			return console.log( err );
		}
	});
});

//Insert a new item ----done
app.post( '/api/items', function( request, response ) {
	var item = new ItemModel({
		name: request.body.name,
		description: request.body.description,
		price: request.body.price,
		path: request.body.path,
		stock: request.body.stock
	});
	item.save( function( err ) {
		if( !err ) {
			return console.log( 'created' );
		} else {
			return console.log( err );
		}
	});
	return response.send( item );
});

//get a single item by id ----done
app.get( '/api/items/:id', function( request, response ) {
	return ItemModel.findById( request.params.id, function( err, item ) {
		if( !err ) {
			return response.send( item );
		} else {
			return console.log( err );
		}
	});
});

//update an item ----done
app.put( '/api/items/:id', function( request, response ) {
	console.log( 'Updating item' + request.body.name );
	return ItemModel.findById( request.params.id, function( err, item ) {
		item.name = request.body.name;
		item.description = request.body.description;
		item.price = request.body.price;
		item.path = request.body.path;
		item.stock = request.body.stock;

		return item.save( function( err ){
			if( !err ){
				console.log( 'item updated' );
			} else {
				console.log ( err );
			}
			return response.send( item );
		});
	});
});

//delete an item
app.delete( '/api/items/:id', function( request, response ) {
    console.log( 'Deleting item with id: ' + request.params.id );
    return ItemModel.findById( request.params.id, function( err, item ) {
    return item.remove( function( err ) {
			if( !err ) {
                console.log( 'Item removed' );
 				return response.send( '' );
 			} else {
 				console.log( err );
 			}
 		});
 	});
});

