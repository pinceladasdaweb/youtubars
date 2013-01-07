/*
*
* Youtubars 1.0
* Copyright 2013, Pedro Rogerio
* Licensed under the WTFPL licenses (http://www.wtfpl.net/).
*
*/
Handlebars.registerHelper("duration", function() {
	return new Handlebars.SafeString(
		Youtubars.seconds2time(this.duration)
	);
});

Handlebars.registerHelper("published", function() {
	return new Handlebars.SafeString(
		moment().startOf('day').fromNow()
	);
});

Handlebars.registerHelper("description", function() {
	return new Handlebars.SafeString(
		Youtubars.truncate(this.description, 170)
	);
});

var Youtubars = {
    init: function(config) {
		this.url = 'http://gdata.youtube.com/feeds/api/videos?v=2&max-results='+config.count+'&alt=json&orderby=published&format=5&author='+config.username+'&callback=?';
		this.template = config.template;
        this.container = config.container;
        this.fetch();
    },
    attachTemplate: function() {
        var template = Handlebars.compile(this.template);

        this.container.empty().append(template(this.youtube));
    },
    fetch: function() {
        var self = this;
        
        $.getJSON(this.url, function(data) {
			var feed = data.feed,
				entries = feed.entry || [];
            
			self.youtube = $.map(entries, function(videos) {
                return {
                    image: videos.media$group.media$thumbnail[1].url,
					title: videos.media$group.media$title.$t,
					published: videos.published.$t,
					viewCount: videos.yt$statistics.viewCount,
					description: videos.media$group.media$description.$t,
					duration: videos.media$group.yt$duration.seconds,
					link: videos.link[0].href
                };
            });

            self.attachTemplate();
        });
    },
	seconds2time: function(seconds) {
		var hours   = Math.floor(seconds / 3600);
    	var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    	var seconds = seconds - (hours * 3600) - (minutes * 60);
    	var time = "";
		
		if (hours != 0) {
		  time = hours+":";
		}
		if (minutes != 0 || time !== "") {
		  minutes = (minutes < 10 && time !== "") ? "0"+minutes : String(minutes);
		  time += minutes+":";
		}
		if (time === "") {
		  time = seconds+"s";
		}
		else {
		  time += (seconds < 10) ? "0"+seconds : String(seconds);
		}
		return time;
	},
	truncate: function(text, limit) {
		if(text.length>limit){
			limit--;
			last = text.substr(limit-1,1);
			while(last!=' ' && limit > 0){
				limit--;
				last = text.substr(limit-1,1);
			}
			last = text.substr(limit-2,1);
			if(last == ',' || last == ';'  || last == ':'){
				 text = text.substr(0,limit-2) + '...';
			} else if(last == '.' || last == '?' || last == '!'){
				 text = text.substr(0,limit-1);
			} else {
				 text = text.substr(0,limit-1) + '...';
			}
		}
		return text;	
	}
};

Youtubars.init({
    template: $('#youtube-template').html(),
    container: $('#container'),
    username: 'googlechrome',
    count: '30'
});