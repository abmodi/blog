define(["backbone", "app/app", "app/templates/post-template"],
	function(Backbone, App, FullPostTemplate) {
	App.FullPostView = Backbone.View.extend({
		initialize: function() {
			Backbone.View.prototype.initialize.call(this);
			this._addEventListeners();
		},

		events : {
			"click .read-more": "_readMoreClick",
		},

		template : _.template(FullPostTemplate),

		render: function() {
			this.setElement(".full-post-view");
			var postJson = this.model.toJSON();
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.show();
			return this;
		},

		_addEventListeners: function() {
			this.model.on("change", this.render, this);
		},

		_destory: function() {
			this.model.destroy();
		},

		_readMoreClick: function() {
			alert("Yo");
			App.router.navigate("/posts/"+this.model.get("_id"), {trigger: true});
		},

	});

	return App.PostView;
});