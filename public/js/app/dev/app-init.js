define(["app/app", "backbone", "app/router"], 
	function(App, Backbone) {
		App.init = function() {
			var appRouter = new App.appRouter;
			App.router = appRouter;
			Backbone.history.start({pushState: true, root: "/blog"});
		};
	}
);