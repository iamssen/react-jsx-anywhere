/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ }
/******/ ])