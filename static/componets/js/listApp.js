var itemName01 = new app.listItem({

  item: "Lorem ipsum dolor sit amet", //si no lo declaro aparece el default
  img: "static/img/item.jpg",
  name: "item01",
  price: "150.99"
  
});
var itemName02 = new app.listItem({

  item: "Excepteur sint occaecat ", 
  img: "static/img/item.jpg",
  name: "item02",
  price: "25.50"
});
var itemName03 = new app.listItem({

  img: "static/img/item.jpg",
  name: "item03",
  price: "25.50"
});
var boxItemName01 = new app.box({
	price: ""
});

var totalDisplay = new app.total({
  total:"201.50"
});

var displayItems = new app.listItemCollection([itemName01, itemName02, itemName03]);
var textTestView = new app.listItemModelView({ collection: displayItems});

var displayItemsbox = new app.boxCollection([boxItemName01]);
var boxtestView = new app.boxModelView({ collection: displayItems});

var displaytotaltest = new app.totalCollection(totalDisplay);
var totaltestView = new app.totalModelView({ collection: displaytotaltest});

$("#list").html(textTestView.render().el);
$("#box-list").html(boxtestView.render().el);
$("#total").html(totaltestView.render().el);

console.log