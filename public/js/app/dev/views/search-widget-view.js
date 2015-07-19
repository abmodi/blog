define(["app/app", "backbone", "app/templates/search-widget-template"], 
	function(App, Backbone, SearchWidgetTemplate) {
		App.SearchWidgetView = Backbone.View.extend({
			initialize: function(){
				Backbone.View.prototype.initialize.call(this);
			},

			template: _.template(SearchWidgetTemplate),

			render: function() {
				this.setElement(this.template());
				return this.$el;
			}
		});
		return App.SearchWidgetView;
	}
)