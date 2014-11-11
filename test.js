var util = require('util')
var twitter = require('twitter');
var sentiment = require('sentiment');
var secrets = require('./config/secrets');
var _ = require('underscore');

var twit = new twitter({
	consumer_key: secrets.twitterConsumerKey,
	consumer_secret: secrets.twitterConsumerSecret,
	access_token_key: secrets.twitterAccessTokenKey,
	access_token_secret: secrets.twitterAccessTokenSecret
});

var keywords = [
	// 'AngularJS',
	// 'EmberJS',
	// 'BackboneJS',
	// 'ReactJS'
	'NodeJS',
	'Ruby on Rails',
	'Python Django'
]

var sentiments = {}

var getSentimentStreams = function(){
	twit.stream("filter", {track: keywords.join(", ")}, function(stream){

		stream.on('data', function(data){
			console.log("--------");
			console.log(data.text);
			console.log(sentiment(data.text).score);
			console.log("-------");
			processTweet(data);
		});

	});
};

// console.log(keywords.join(", "));

getSentimentStreams();

var processTweet = function(tweet){console.log};