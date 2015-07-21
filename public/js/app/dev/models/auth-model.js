define(["backbone", "app/app"], function(Backbone, App) {
	
	App.AuthModel = Backbone.Model.extend({
		initialize: function() {
			Backbone.Model.prototype.initialize.call(this);
		},

		url: "/blog/login",

		defaults: {
			username: "",
			password: "",
		}

	});

	return App.AuthModel;

});