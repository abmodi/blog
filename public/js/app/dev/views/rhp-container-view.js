define(["app/app", "backbone", "app/views/search-widget-view", "app/views/subscribe-widget-view"], 
	function(App, Backbone) {
		App.RHPContainerView = Backbone.View.extend({
			initialize: function(){
				Backbone.View.prototype.initialize.call(this);
				this.searchWidgetView = new App.SearchWidgetView();
				this.subscribeWidgetView = new App.SubscribeWidgetView();
			},

			render: function() {
				this.setElement(".rhp-container-view");
				if(this.$el.children().length === 0) {
					this.$el.append(this.searchWidgetView.render());
					this.$el.append(this.subscribeWidgetView.render());
				}
				return this.$el;
			}
		});
		return App.RHPContainerView;
	}
)