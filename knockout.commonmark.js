define([ 'knockout', 'commonmark' ], function(ko, commonmark) {
	var reader = commonmark.DocParser();
	var writer = commonmark.HtmlRenderer();

	var convert = function (element, valueAccessor) {
		var accessor = valueAccessor();
		var actual = typeof accessor === 'function' ? accessor() : accessor;

		element.innerHTML = actual ? writer.render(reader.parse(actual)) : '';
	};

	ko.bindingHandlers.commonmark = { init: convert, update: convert };
});