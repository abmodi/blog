define(["backbone", "app/app", "app/templates/login-template", "app/models/auth-model"],
	function(Backbone, App, LoginTemplate) {
	App.LoginView = Backbone.View.extend({
		initialize: function() {
			Backbone.View.prototype.initialize.call(this);
			//this._addEventListeners();
		},

		events : {
			"click .login": "_loginClick",
		},

		model: new App.AuthModel(),

		template : _.template(LoginTemplate),

		tagName : 'div',

		render: function() {
			this.setElement(".login-view");
			this.$el.html(this.template());
			return this;
		},

		_destory: function() {
			this.model.destroy();
		},

		_loginClick: function() {
			//alert(this.$(".username").val());
			//alert(this.$(".password").val());
			this.model.set("username", this.$(".username").val());
			this.model.set("password", this.$(".password").val());
			this.model.save([], {
				success: function(){
					alert("Successful Login");
				},
				error: function() {
					alert("login failed");
				}
			});
		},

	});

	return App.LoginView;
});