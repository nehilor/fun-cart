var itemName01=new app.listItem({item:"Lorem ipsum dolor sit amet",img:"static/img/item.jpg",name:"item01",price:"150.99"}),itemName02=new app.listItem({item:"Excepteur sint occaecat ",img:"static/img/item.jpg",name:"item02",price:"25.50"}),itemName03=new app.listItem({img:"static/img/item.jpg",name:"item03",price:"25.50"}),boxItemName01=new app.box({price:""}),totalDisplay=new app.total({total:"201.50"}),displayItems=new app.listItemCollection([itemName01,itemName02,itemName03]),textTestView=new app.listItemModelView({collection:displayItems}),displayItemsbox=new app.boxCollection([boxItemName01]),boxtestView=new app.boxModelView({collection:displayItems}),displaytotaltest=new app.totalCollection(totalDisplay),totaltestView=new app.totalModelView({collection:displaytotaltest});$("#list").html(textTestView.render().el),$("#box-list").html(boxtestView.render().el),$("#total").html(totaltestView.render().el),console.log;