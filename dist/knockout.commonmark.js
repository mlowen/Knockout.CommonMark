!function(){var n=function(n,e){var o=e.Parser(),r=e.HtmlRenderer(),i=function(n,e){var i=e(),a="function"==typeof i?i():i;n.innerHTML=a?r.render(o.parse(a)):""};n.bindingHandlers.commonmark={init:i,update:i}};"function"==typeof define&&define.amd?define(["knockout","commonmark"],n):n(ko,commonmark)}();