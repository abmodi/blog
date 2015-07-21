define(["backbone", "app/app"], function(Backbone, App) {
	
	App.PostModel = Backbone.Model.extend({
		initialize: function() {
			Backbone.Model.prototype.initialize.call(this);
		},

		urlRoot: "/posts",
		
		idAttribute: '_id',

		defaults: {
			title: "",
			body: "",
			author: "Abhishek Modi"
		}

	});

	return App.PostModel;

});