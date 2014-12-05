define([ 'knockout', 'commonmark' ], function(ko, commonmark) {
	var reader = commonmark.DocParser();
	var writer = commonmark.HtmlRenderer();

	var convert = function (element, valueAccessor) {
		var html = '';
		var value = valueAccessor()();

		if (value) {
			html = writer.render(reader.parse(value));

			element.innerHTML = html;
		};
	}

	ko.bindingHandlers.commonmark = { init: convert, update: convert };
});
