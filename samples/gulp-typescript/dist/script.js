///<reference path="ReactElement.ts"/>
var ReactElement = require('./ReactElement');
var React = (function () {
    function React() {
    }
    React.createElement = function (type, props) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        return new ReactElement(type, props, children);
    };
    return React;
})();
function jsx(str) {
    return null;
}
// Classes
var Application = (function () {
    function Application() {
    }
    Application.prototype.toTypeString = function () {
        return 'application';
    };
    return Application;
})();
var Container = (function () {
    function Container() {
    }
    Container.prototype.toTypeString = function () {
        return 'container';
    };
    return Container;
})();
var Button = (function () {
    function Button() {
    }
    Button.prototype.toTypeString = function () {
        return 'button';
    };
    return Button;
})();
var Label = (function () {
    function Label() {
    }
    Label.prototype.toTypeString = function () {
        return 'label';
    };
    return Label;
})();
// Exports
var element = (React.createElement(Application, { num: 1, str: "a" }, React.createElement(Container, { num: 2, str: "b" }, React.createElement(Label, { num: 3, str: "c" }), React.createElement(Button, { num: 4, str: "d" }))));
module.exports = element;
