var app=app||{};app.listItemModelView=Backbone.View.extend({className:"item",render:function(){return this.collection.each(this.additem,this),this},addText:function(e){var t=new app.listItemTemplateView({model:e});this.$el.append(t.render().el)}});