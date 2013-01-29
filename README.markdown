[Youtubars](http://www.pinceladasdaweb.com.br/blog/uploads/youtubars/)
=================

Display Youtube user feed with jQuery and Handlebars Template.

##Usage

1. Paste right before your page's closing `</body>` tag
```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.rc.1/handlebars.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/moment.js/1.7.2/moment.min.js"></script>
<script type="text/javascript" src="src/youtube.js"></script>
```

2. From within a script tag or a JS file
```javascript	
	Youtubars.init({
		template: $('#youtube-template').html(),	// The ID of your template
		container: $('#container'),					// domNode to attach to
		username: 'googlechrome',					// Youtube username
		count: 30									// Number of videos to display. Maximum 50
	});
```

##Customize Template

1. To customize the template open the index.html file and look for the following block of code:

```javascript
<script id="youtube-template" type="text/x-handlebars-template">
    {{#each this}}
	<div class="video clearfix">
		<div class="thumb"><a target="_blank" title="{{title}}" href="{{link}}"><img title="{{title}}" alt="{{title}}" src="{{image}}"></a><span>{{duration}}</span></div>
		<div class="video-content">
			<h2><a target="_blank" title="{{title}}" href="{{link}}">{{title}}</a></h2>
			<p class="date"><strong>Published: </strong>{{published}}</p>
			<p class="views"><strong>Views: </strong>{{viewCount}}</p>
			{{#if description}}
			<p class="description">{{description}}</p>
			{{/if}}
		</div>
	</div>
    {{/each}}
</script>
```

Change the HTML as it deems necessary.

##License

[WTFPL](http://www.wtfpl.net/)