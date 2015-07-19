define(["backbone", "app/app", "app/templates/post-create-template"], 
	function(Backbone, App, PostCreateTemplate) {
		App.PostCreateView = Backbone.View.extend({
			initialize: function() {
				Backbone.View.prototype.initialize.call(this);
			},

			events: {
				"click .create-post": "_onCreatePostClick"
			},

			template: _.template(PostCreateTemplate),

			render: function() {
				this.setElement(".post-create-view");
				if(this.$el.children().length === 0) {
					this.$el.html(this.template());
				}
				CKEDITOR.replace(this.$(".post-body")[0]);
				this.$el.show();
			},

			_onCreatePostClick: function() {
				alert("post created");
				var title = this.$(".post-title").val(),
					body = CKEDITOR.instances.editor1.getData(),
					tags = this.$(".post-tags").val();
				this.collection.create({
					title: title,
					body: body,
					tags: tags,
					author: "Abhishek Modi"
				}, {silent: true, wait: true, success: this._onSuccessfullyCreated});
			},

			_onSuccessfullyCreated: function() {
				alert("post created");
			}
		});
		return App.PostCreateView;
	}
);