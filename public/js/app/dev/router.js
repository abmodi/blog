define(["backbone", "app/app", "app/collections/post-list-collection", "app/models/post-model",
		"app/views/post-list-view", "app/views/full-post-view", "app/views/post-create-view",
		"app/views/rhp-container-view", "app/views/login-view"],
	function(Backbone, App) {
		App.appRouter = Backbone.Router.extend({
			initialize: function() {
				this.$postListView = $(".post-list-view");
				this.$postCreateView = $(".post-create-view");
				this.$fullPostView = $(".full-post-view");
				this.$rhpContainerView = $(".rhp-container-view");
				this.$loginView = $(".login-view");
			},

			_hideAllViews: function() {
				this.$postCreateView.hide();
				this.$postListView.hide();
				this.$fullPostView.hide();
				this.$loginView.hide();
			},

			routes: {
				"": "defaultViewFunc",
				"articles/create": "createPostViewFunc",
				"articles/:id": "fullPostViewFunc",
				"login": "loginViewFunc",
			},
			defaultViewFunc: function() {
				this._hideAllViews();
				this.$postListView.show();
				if(this.postListCollection === undefined) {
					this.postListCollection = new App.PostListCollection();
					this.postListView = new App.PostListView({collection: this.postListCollection});
				}
				if(this.rhpContainerView === undefined) {
					this.rhpContainerView = new App.RHPContainerView();
				}
				else {
					this.postListView.render();
				}
				this.rhpContainerView.render();
			},

			fullPostViewFunc: function(id) {
				this._hideAllViews();
				this.$fullPostView.show();
				var post = new App.PostModel({_id: id});
				post.fetch({success: function(){
					var fullPostView = new App.FullPostView({model: post});
					fullPostView.render();
				}});
			},

			createPostViewFunc: function() {
				this._hideAllViews();
				this.$postCreateView.show();
				if(this.postListCollection === undefined) {
					this.postListCollection = new App.PostListCollection();
				}
				if(this.postCreateView === undefined) {
					this.postCreateView = new App.PostCreateView({collection: this.postListCollection});
				}
				this.postCreateView.render();
			}, 

			loginViewFunc: function() {
				this._hideAllViews();
				this.$loginView.show();
				if(this.loginView === undefined) {
					this.loginView = new App.LoginView();
				}
				this.loginView.render();
			}
		});
	}
);