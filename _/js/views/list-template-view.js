var app=app||{};app.listItemTemplateView=Backbone.View.extend({tagName:"li",className:"item",template:_.template($("#list-template").html()),render:function(){var ItemTemplate=this.template(this.model.toJSON());return this.$el.html(ItemTemplate),this}});