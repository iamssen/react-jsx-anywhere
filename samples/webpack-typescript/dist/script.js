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

	///<reference path="ReactElement.ts"/>
	var ReactElement = __webpack_require__(1);
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// React Classes
	var ReactElement = (function () {
	    function ReactElement(type, props, children) {
	        this.type = type;
	        this.props = props;
	        this.children = children;
	    }
	    return ReactElement;
	})();
	module.exports = ReactElement;


/***/ }
/******/ ])