"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// React Classes

var ReactElement = function ReactElement(type, props, children) {
	_classCallCheck(this, ReactElement);

	this.type = type;
	this.props = props;
	this.children = children;
};

var React = (function () {
	function React() {
		_classCallCheck(this, React);
	}

	_prototypeProperties(React, {
		createElement: {
			value: function createElement(type, props) {
				for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
					children[_key - 2] = arguments[_key];
				}

				return new ReactElement(type, props, children);
			},
			writable: true,
			configurable: true
		}
	});

	return React;
})();

// Classes

var Application = (function () {
	function Application() {
		_classCallCheck(this, Application);
	}

	_prototypeProperties(Application, null, {
		toTypeString: {
			value: function toTypeString() {
				return "application";
			},
			writable: true,
			configurable: true
		}
	});

	return Application;
})();

var Container = (function () {
	function Container() {
		_classCallCheck(this, Container);
	}

	_prototypeProperties(Container, null, {
		toTypeString: {
			value: function toTypeString() {
				return "container";
			},
			writable: true,
			configurable: true
		}
	});

	return Container;
})();

var Button = (function () {
	function Button() {
		_classCallCheck(this, Button);
	}

	_prototypeProperties(Button, null, {
		toTypeString: {
			value: function toTypeString() {
				return "button";
			},
			writable: true,
			configurable: true
		}
	});

	return Button;
})();

var Label = (function () {
	function Label() {
		_classCallCheck(this, Label);
	}

	_prototypeProperties(Label, null, {
		toTypeString: {
			value: function toTypeString() {
				return "label";
			},
			writable: true,
			configurable: true
		}
	});

	return Label;
})();

// Exports
var element = React.createElement(Application, { num: 1, str: "a" }, React.createElement(Container, { num: 2, str: "b" }, React.createElement(Label, { num: 3, str: "c" }), React.createElement(Button, { num: 4, str: "d" })));

module.exports = element;