define(["backbone", "app/app", "app/templates/post-template"],
	function(Backbone, App, PostTemplate) {
	App.PostView = Backbone.View.extend({
		initialize: function() {
			Backbone.View.prototype.initialize.call(this);
			this._addEventListeners();
		},

		events : {
			"click .read-more": "_readMoreClick",
		},

		template : _.template(PostTemplate),

		tagName : 'div',

		render: function() {
			var postJson = this.model.toJSON();
			this.$el.html(this.template(this.model.toJSON()));
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