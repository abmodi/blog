define([], function() {
	return  '<div class="row">Title: ' +
				'<div class="col-md-12">' +
					'<input type="text" class="post-title"/>' +
				'</div>' +
			'</div>' +
			'<div class="row">Tags: ' +
				'<div class="col-md-12">' +
					'<input type="text" class="post-tags" style="width:100%"/>' +
				'</div>' +
			'</div>' +
			'<div class="row">Body: ' +
				'<div class="col-md-12">' +
					'<textarea class="post-body"/>' +
				'</div>' +
			'</div>' +
			'<div class="row">' +
				'<div class="btn btn-default create-post">Create</div>' +
			'</div>';

});