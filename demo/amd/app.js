requirejs.config({
	'paths': {
		'knockout': '../../bower_components/knockout/dist/knockout',
		'commonmark': '../../bower_components/commonmark/dist/commonmark',
		'domReady': 'http://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady'
	},
	'urlArgs': 'bust=' + (new Date()).getTime()
});

require(
	[ 'knockout', '../../src/knockout.commonmark', 'domReady!' ],
	function (ko) {
		ko.applyBindings({ text: ko.observable('') });
	}
);
