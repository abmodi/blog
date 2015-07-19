define(["app/app", "backbone", "app/templates/subscribe-widget-template"], 
	function(App, Backbone, SubscribeWidgetTemplate) {
		App.SubscribeWidgetView = Backbone.View.extend({
			initialize: function(){
				Backbone.View.prototype.initialize.call(this);
			},

			template: _.template(SubscribeWidgetTemplate),

			events: {
				"click .subscribe-submit": "_onSubscribeClick"
			},

			render: function() {
				this.setElement(this.template());
				return this.$el;
			},

			_onSubscribeClick: function() {
				alert("Subscribe");
			}
		});
		return App.SubscribeWidgetView;
	}
)