var itemName = new app.listItem({

  text: "Yeah :) ", //si no lo declaro aparece el default
  
});
var textTest = new app.listItemCollection(itemName);

var textTestView = new app.listItemModelView({ collection: textTest});

$("#list").html(textTestView.render().el);
