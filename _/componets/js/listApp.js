var itemName01 = new app.listItem({

  item: "Lorem ipsum dolor sit amet", //si no lo declaro aparece el default
  img: "_/img/item.jpg",
  name: "item01",
  price: "50.99"
  
});
var itemName02 = new app.listItem({

  item: "Excepteur sint occaecat cupidatat non proident", 
  img: "_/img/item.jpg",
  name: "item02",
  price: "25.50"
});
var displayItems = new app.listItemCollection([itemName01, itemName02]);

var textTestView = new app.listItemModelView({ collection: displayItems});

$("#list").html(textTestView.render().el);
