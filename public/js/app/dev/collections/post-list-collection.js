define(["backbone", "app/app", "app/models/post-model"], function(Backbone, App){
	App.PostListCollection = Backbone.Collection.extend({
		initialize: function() {
			var i, todoModel;
			Backbone.Collection.prototype.initialize.call(this);
			/*for(i=0; i<5; ++i) {
				todoModel = new App.TodoModel();
				this.add(todoModel);
			}
			*/
		}, 
		model : App.PostModel, 
		url : "http://localhost:5000/blog/posts"
	});

	return App.PostListCollection;
});