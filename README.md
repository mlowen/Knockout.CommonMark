# Knockout.CommonMark

Knockout.CommonMark provides [Knockout](http://knockoutjs.com/) bindings for [CommonMark](http://commonmark.org/) allowing markdown stored in the view model to be displayed as HTML.

## Dependencies

* [Knockout](http://knockoutjs.com/) - Was developed against v3.2.0 but should work with older versions.
* [CommonMark](http://commonmark.org/) - Was developed against [v0.12](https://github.com/jgm/CommonMark/releases/tag/0.12). 

## Usage

Knockout.CommonMark exposes itself as an AMD compliant module, if it can't do that it will add itself to the global scope. Once you have loaded Knockout.CommonMark then you can bind your view model like so:

```html
<div data-bind="commonmark: text"></div>
```

### Issues

If you find any issues while using Knockout.CommonMark please feel free to report them at the [GitHub Repository](https://github.com/mlowen/Knockout.CommonMark/issues).

## License

Knockout.CommonMark is available under the MIT license which is as follows:

Copyright &copy; 2014 Michael Lowen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
