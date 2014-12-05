requirejs.config({
	'paths': {
		'knockout': 'http://cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min',
		'domReady': 'http://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady',
		'commonmark': 'http://spec.commonmark.org/js/commonmark'
	},
	'urlArgs': 'bust=' + (new Date()).getTime()
});

require(
	[ 'knockout', 'domReady!' ],
	function (ko) {
		console.log('hello');
	}
);
