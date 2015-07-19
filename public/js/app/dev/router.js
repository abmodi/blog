define(["backbone", "app/app", "app/collections/post-list-collection", "app/models/post-model",
		"app/views/post-list-view", "app/views/full-post-view", "app/views/post-create-view",
		"app/views/rhp-container-view"],
	function(Backbone, App) {
		App.appRouter = Backbone.Router.extend({
			initialize: function() {
				this.$postListView = $(".post-list-view");
				this.$postCreateView = $(".post-create-view");
				this.$fullPostView = $(".full-post-view");
				this.$rhpContainerView = $(".rhp-container-view");
			},

			routes: {
				"": "defaultView",
				"articles/create": "createPost",
				"articles/:id": "getFullPost",
			},
			defaultView: function() {
				this.$postListView.hide();
				this.$postCreateView.hide();
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

			getFullPost: function(id) {
				alert(id);
				var post = new App.PostModel({_id: id});
				post.fetch({success: function(){
					var fullPostView = new App.FullPostView({model: post});
					fullPostView.render();
				}});
			},

			createPost: function() {
				alert("createView");
				this.$postListView.hide();
				this.$postCreateView.hide();
				if(this.postListCollection === undefined) {
					this.postListCollection = new App.PostListCollection();
				}
				if(this.postCreateView === undefined) {
					this.postCreateView = new App.PostCreateView({collection: this.postListCollection});
				}
				$(".post-list-view").hide();
				this.postCreateView.render();
			}
		});
	}
);