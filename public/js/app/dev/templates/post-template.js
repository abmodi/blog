define([], function() {

return		'<article id=<%= _id %> class="hentry">' +
				'<div class="blog-item-wrap">' +
					'<div class="post-inner-content">' +
						'<header class="entry-header page-header">' +
							'<h1 class="entry-title">' +
								'<a href="https://blog.nraboy.com/" rel="bookmark"><%= title %></a>' +
							'</h1>' +
							'<div class="entry-meta">' +
								'<span class="posted-on">' +
									'<i class="fa fa-calendar"></i>' +
									'<a href="#" rel="bookmark">' +
								 		'<time class="entry-date published" datetime="2015-07-03T07:00:29+00:00">July 3, 2015</time>'+
								 	'</a>' +
								'</span>' +
								'<span class="author-name">' +
									'<i class="fa fa-user"></i>' +
									'<a class="url fn n" href="#"><%= author %></a>' +
								'</span>' +
								'<span class="comments-link">' +
									'<i class="fa fa-comment-o"></i>'+
									'<a href="#" data-disqus-identifier="1953 https://blog.nraboy.com/?p=1953">13 Comments</a>' +
								'</span>' +
							'</div>' +	
						'</header>' +

						'<div class="entry-content">' +
							'<p><%= body %></p>' +
							'<p><a class="btn btn-default read-more" href="https://blog.nraboy.com/">Read More</a></p>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</article>';
});