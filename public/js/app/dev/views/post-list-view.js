define(["backbone", "app/app", "app/templates/post-list-template", "app/views/post-view"],
	function(Backbone, App, PostListTemplate){
		App.PostListView = Backbone.View.extend({
			initialize: function() {
				Backbone.View.prototype.initialize.call(this);
				this._addEventListeners();
				this.collection.fetch({reset:true});
			},

			events:{
				"keypress #new-todo":"_createOnEnter",
				"click #toggle-all":"toggleAll",
				"click #clear-completed":"deleteAllCompleted",
			},

			template : _.template(PostListTemplate),

			render: function() {
				this.setElement(".post-list-view");
				if(this.$el.children().length === 0) {
					this.$el.html(this.template());
					this._initWrappers();
				}
				this.$el.show();
				this.collection.each(_.bind(function(post){
					var postView = new App.PostView({model: post});
					this.$postList.append(postView.render().$el);
				}, this));
				setTimeout(function(){
					hljs.initHighlightingOnLoad();
				}, 3000);
			},

			_initWrappers: function() {
				this.$postList = this.$(".site-main");
			},

			_addEventListeners: function() {
				this.collection.on('reset', this.render, this);
			}
		});

		return App.PostListView;
});