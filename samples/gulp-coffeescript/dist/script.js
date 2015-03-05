(function() {
  var Application, Button, Container, Label, React, ReactClass, ReactElement,
    slice = [].slice;

  ReactElement = (function() {
    function ReactElement(type1, props1, children1) {
      this.type = type1;
      this.props = props1;
      this.children = children1;
    }

    return ReactElement;

  })();

  ReactClass = (function() {
    function ReactClass() {}

    ReactClass.prototype.createElement = function() {
      var children, props, type;
      type = arguments[0], props = arguments[1], children = 3 <= arguments.length ? slice.call(arguments, 2) : [];
      return new ReactElement(type, props, children);
    };

    return ReactClass;

  })();

  React = new ReactClass;

  Application = (function() {
    function Application() {}

    Application.prototype.toTypeString = function() {
      return 'application';
    };

    return Application;

  })();

  Container = (function() {
    function Container() {}

    Container.prototype.toTypeString = function() {
      return 'container';
    };

    return Container;

  })();

  Button = (function() {
    function Button() {}

    Button.prototype.toTypeString = function() {
      return 'button';
    };

    return Button;

  })();

  Label = (function() {
    function Label() {}

    Label.prototype.toTypeString = function() {
      return 'label';
    };

    return Label;

  })();

  module.exports = React.createElement(Application, {
    num: 1,
    str: "a"
  }, React.createElement(Container, {
    num: 2,
    str: "b"
  }, React.createElement(Label, {
    num: 3,
    str: "c"
  }), React.createElement(Button, {
    num: 4,
    str: "d"
  })));

}).call(this);
