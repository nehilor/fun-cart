var itemName01 = new app.listItem({

  item: "Lorem ipsum dolor sit amet", //si no lo declaro aparece el default
  img: "_/img/item.jpg",
  name: "item01",
  price: "150.99"
  
});
var itemName02 = new app.listItem({

  item: "Excepteur sint occaecat cupidatat non proident", 
  img: "_/img/item.jpg",
  name: "item02",
  price: "25.50"
});
var itemName03 = new app.listItem({

  img: "_/img/item.jpg",
  name: "item03",
  price: "25.50"
});
var boxItemName01 = new app.box({
	price: ""
});

var displayItems = new app.listItemCollection([itemName01, itemName02, itemName03]);
var textTestView = new app.listItemModelView({ collection: displayItems});
var displayItemsbox = new app.boxCollection([boxItemName01]);
var boxtestView = new app.boxModelView({ collection: displayItems});

$("#list").html(textTestView.render().el);
$("#box-list").html(boxtestView.render().el);
