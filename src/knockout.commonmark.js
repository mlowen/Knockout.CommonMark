(function() {
	var init = function(ko, commonmark) {
		var reader = commonmark.Parser();
		var writer = commonmark.HtmlRenderer();

		var convert = function (element, valueAccessor) {
			var accessor = valueAccessor();
			var actual = typeof accessor === 'function' ? accessor() : accessor;

			element.innerHTML = actual ? writer.render(reader.parse(actual)) : '';
		};

		ko.bindingHandlers.commonmark = { init: convert, update: convert };
	};

	if(typeof define === 'function' && define.amd)
		define([ 'knockout', 'commonmark' ], init);
	else
		init(ko, commonmark);
})();
