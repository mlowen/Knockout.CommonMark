(function() {
	var init = function(ko, commonmark) {
		var reader = commonmark.Parser();
		var writer = commonmark.HtmlRenderer();

		var convert = function (element, valueAccessor) {
			var value = ko.unwrap(valueAccessor());

			element.innerHTML = value ? writer.render(reader.parse(value)) : '';
		};

		ko.bindingHandlers.commonmark = { init: convert, update: convert };
	};

	if(typeof define === 'function' && define.amd)
		define([ 'knockout', 'commonmark' ], init);
	else
		init(ko, commonmark);
})();
