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
		count: '30'									// Number of videos to display. Maximum 50
	});
```

##License

[WTFPL](http://www.wtfpl.net/)