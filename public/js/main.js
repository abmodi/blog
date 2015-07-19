require.config({
	paths: {
		jquery  	: "lib/jquery",
		backbone	: "lib/backbone",
		underscore	: "lib/underscore",
		app 		: "app/dev",
		lib			: "lib"
	},

	shim: {
		underscore	: {
			exports : "_"
		},
		backbone	: {
			deps: ["underscore"],
			exports: "Backbone"
		}
	}
});

require(["app/app", "app/app-init"], function(App) {
	App.init();
});
