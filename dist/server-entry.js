module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/.4.17.1@webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./node_modules/.4.3.5@react-hot-loader/dist/react-hot-loader.production.min.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.4.3.5@react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("function _interopDefault(t){return t&&\"object\"==typeof t&&\"default\"in t?t.default:t}Object.defineProperty(exports,\"__esModule\",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ \"react\")),classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")},inherits=function(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e},AppContainer=function(t){function e(){return classCallCheck(this,e),possibleConstructorReturn(this,t.apply(this,arguments))}return inherits(e,t),e.prototype.render=function(){return React.Children.only(this.props.children)},e}(React.Component),hot_prod=function(){return function(t){return t}},areComponentsEqual=function(t,e){return t===e},setConfig=function(){},cold=function(t){return t};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold;\n\n\n//# sourceURL=webpack:///./node_modules/.4.3.5@react-hot-loader/dist/react-hot-loader.production.min.js?");

/***/ }),

/***/ "./node_modules/.4.3.5@react-hot-loader/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/.4.3.5@react-hot-loader/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (true) {\n  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ \"./node_modules/.4.3.5@react-hot-loader/dist/react-hot-loader.production.min.js\");\n} else {}\n\n\n//# sourceURL=webpack:///./node_modules/.4.3.5@react-hot-loader/index.js?");

/***/ }),

/***/ "./src/config/router.jsx":
/*!*******************************!*\
  !*** ./src/config/router.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nexports.__esModule = true;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _index = __webpack_require__(/*! ../views/topic-list/index */ \"./src/views/topic-list/index.jsx\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(/*! ../views/topic-detail/index */ \"./src/views/topic-detail/index.jsx\");\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _apiTest = __webpack_require__(/*! ../views/test/api-test */ \"./src/views/test/api-test.jsx\");\n\nvar _apiTest2 = _interopRequireDefault(_apiTest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default() {\n  return [_react2.default.createElement(_reactRouterDom.Route, { key: 'first', path: '/', render: function render() {\n      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/list' });\n    }, exact: true }), _react2.default.createElement(_reactRouterDom.Route, { key: 'list', path: '/list', component: _index2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 'detail', path: '/detail', component: _index4.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 'test', path: '/test', component: _apiTest2.default })];\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, 'default', 'E:/_projects/react-ssr/src/config/router.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.4.17.1@webpack/buildin/module.js */ \"./node_modules/.4.17.1@webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/config/router.jsx?");

/***/ }),

/***/ "./src/server-entry.js":
/*!*****************************!*\
  !*** ./src/server-entry.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nexports.__esModule = true;\nexports.createStoreMap = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _mobxReact = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n\nvar _App = __webpack_require__(/*! ./views/App */ \"./src/views/App.jsx\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _store = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n// 让 mobx 在服务端数据渲染的时候不会重复的数据变换\n(0, _mobxReact.useStaticRendering)(true);\n\n/**\n * [description]\n * @param  {[type]} stores 从外部传入的多个 store 实例\n */\n\nvar _default = function _default(stores, routerContext, url) {\n  return _react2.default.createElement(\n    _mobxReact.Provider,\n    stores,\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { context: routerContext, location: url },\n      _react2.default.createElement(_App2.default, null)\n    )\n  );\n};\n\nexports.default = _default;\nexports.createStoreMap = _store.createStoreMap;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, 'default', 'E:/_projects/react-ssr/src/server-entry.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.4.17.1@webpack/buildin/module.js */ \"./node_modules/.4.17.1@webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/server-entry.js?");

/***/ }),

/***/ "./src/store/app-state.js":
/*!********************************!*\
  !*** ./src/store/app-state.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nexports.__esModule = true;\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3; /**\n                                                                     * 纯前端展示相关 state\n                                                                     */\n\n\nvar _mobx = __webpack_require__(/*! mobx */ \"mobx\");\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _initDefineProp(target, property, descriptor, context) {\n  if (!descriptor) return;\n  Object.defineProperty(target, property, {\n    enumerable: descriptor.enumerable,\n    configurable: descriptor.configurable,\n    writable: descriptor.writable,\n    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n  });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\nvar AppState = (_class = function () {\n  function AppState() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0, name: 'yishibakaien' },\n        count = _ref.count,\n        name = _ref.name;\n\n    _classCallCheck(this, AppState);\n\n    _initDefineProp(this, 'count', _descriptor, this);\n\n    _initDefineProp(this, 'name', _descriptor2, this);\n\n    _initDefineProp(this, 'changeName', _descriptor3, this);\n\n    this.count = count;\n    this.name = name;\n  }\n\n  AppState.prototype.add = function add() {\n    this.count += 1;\n  };\n\n  // 用在 服务端渲染的时候，将服务端渲染的数据以 JSON 的形式拿到\n  AppState.prototype.toJson = function toJson() {\n    return {\n      count: this.count,\n      name: this.name\n    };\n  };\n\n  // @ts-ignore\n  AppState.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  };\n\n  _createClass(AppState, [{\n    key: 'msg',\n    get: function get() {\n      return this.name + ' say count is ' + this.count;\n    }\n  }]);\n\n  return AppState;\n}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'count', [_mobx.observable], {\n  enumerable: true,\n  initializer: null\n}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {\n  enumerable: true,\n  initializer: null\n}), _applyDecoratedDescriptor(_class.prototype, 'msg', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'msg'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'add', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'add'), _class.prototype), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'changeName', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this = this;\n\n    return function (name) {\n      _this.name = name;\n    };\n  }\n})), _class);\nexports.default = AppState;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(AppState, 'AppState', 'E:/_projects/react-ssr/src/store/app-state.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.4.17.1@webpack/buildin/module.js */ \"./node_modules/.4.17.1@webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/store/app-state.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nexports.__esModule = true;\nexports.createStoreMap = exports.AppState = undefined;\n\nvar _appState = __webpack_require__(/*! ./app-state */ \"./src/store/app-state.js\");\n\nvar _appState2 = _interopRequireDefault(_appState);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar AppState = exports.AppState = _appState2.default;\n\nvar _default = {\n  AppState: AppState\n\n  // 给服务端渲染使用\n};\nexports.default = _default;\nvar createStoreMap = exports.createStoreMap = function createStoreMap() {\n  return {\n    appState: new AppState()\n  };\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(AppState, 'AppState', 'E:/_projects/react-ssr/src/store/store.js');\n  reactHotLoader.register(createStoreMap, 'createStoreMap', 'E:/_projects/react-ssr/src/store/store.js');\n  reactHotLoader.register(_default, 'default', 'E:/_projects/react-ssr/src/store/store.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.4.17.1@webpack/buildin/module.js */ \"./node_modules/.4.17.1@webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/store/store.js?");

/***/ }),

/***/ "./src/views/App.jsx":
/*!***************************!*\
  !*** ./src/views/App.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nexports.__esModule = true;\nexports.default = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _router = __webpack_require__(/*! ../config/router */ \"./src/config/router.jsx\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  App.prototype.componentDidMount = function componentDidMount() {\n    // ...\n  };\n\n  App.prototype.render = function render() {\n    return [_react2.default.createElement(\n      'div',\n      { key: 'nav' },\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/' },\n        '\\u9996\\u9875'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/detail' },\n        '\\u8BE6\\u60C5\\u9875'\n      )\n    ), _react2.default.createElement(_router2.default, { key: 'routes' })];\n  };\n\n  // @ts-ignore\n  App.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  };\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, 'App', 'E:/_projects/react-ssr/src/views/App.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.4.17.1@webpack/buildin/module.js */ \"./node_modules/.4.17.1@webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/views/App.jsx?");

/***/ }),

/***/ "./src/views/test/api-test.jsx":
/*!*************************************!*\
  !*** ./src/views/test/api-test.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nexports.__esModule = true;\nexports.default = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/* eslint-disable */\nvar TestApi = function (_React$Component) {\n  _inherits(TestApi, _React$Component);\n\n  function TestApi() {\n    _classCallCheck(this, TestApi);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  TestApi.prototype.getTopics = function getTopics() {\n    _axios2.default.get('/api/topics').then(function (res) {\n      console.log(res);\n    }).catch(function (err) {\n      console.log(err);\n    });\n  };\n\n  TestApi.prototype.login = function login() {\n    _axios2.default.post('/api/user/login', {\n      accessToken: 'deceae30-9a01-41f3-b0aa-7179a7a10977'\n    }).then(function (res) {\n      console.log(res);\n    }).catch(function (err) {\n      console.log(err);\n    });\n  };\n\n  TestApi.prototype.markAll = function markAll() {\n    _axios2.default.post('/api/message/mark_all?needAccessToken=true').then(function (res) {\n      console.log(res);\n    }).catch(function (err) {\n      console.log(err);\n    });\n  };\n\n  TestApi.prototype.render = function render() {\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'button',\n        { onClick: this.getTopics },\n        'topics'\n      ),\n      _react2.default.createElement(\n        'button',\n        { onClick: this.login },\n        'login'\n      ),\n      _react2.default.createElement(\n        'button',\n        { onClick: this.markAll },\n        'markAll'\n      )\n    );\n  };\n\n  // @ts-ignore\n  TestApi.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  };\n\n  return TestApi;\n}(_react2.default.Component);\n/* eslint-enable */\n\n\nexports.default = TestApi;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(TestApi, 'TestApi', 'E:/_projects/react-ssr/src/views/test/api-test.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.4.17.1@webpack/buildin/module.js */ \"./node_modules/.4.17.1@webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/views/test/api-test.jsx?");

/***/ }),

/***/ "./src/views/topic-detail/index.jsx":
/*!******************************************!*\
  !*** ./src/views/topic-detail/index.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nexports.__esModule = true;\nexports.default = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TopicDetail = function (_React$Component) {\n  _inherits(TopicDetail, _React$Component);\n\n  function TopicDetail() {\n    _classCallCheck(this, TopicDetail);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  TopicDetail.prototype.componetDidMount = function componetDidMount() {\n    // ...\n  };\n\n  TopicDetail.prototype.render = function render() {\n    return _react2.default.createElement(\n      'div',\n      null,\n      'this is topic detail'\n    );\n  };\n\n  // @ts-ignore\n  TopicDetail.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  };\n\n  return TopicDetail;\n}(_react2.default.Component);\n\nexports.default = TopicDetail;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(TopicDetail, 'TopicDetail', 'E:/_projects/react-ssr/src/views/topic-detail/index.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.4.17.1@webpack/buildin/module.js */ \"./node_modules/.4.17.1@webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/views/topic-detail/index.jsx?");

/***/ }),

/***/ "./src/views/topic-list/index.jsx":
/*!****************************************!*\
  !*** ./src/views/topic-list/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nexports.__esModule = true;\n\nvar _dec, _class, _class2, _temp;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mobxReact = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactHelmet2 = _interopRequireDefault(_reactHelmet);\n\nvar _appState = __webpack_require__(/*! ../../store/app-state */ \"./src/store/app-state.js\");\n\nvar _appState2 = _interopRequireDefault(_appState);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TopicList = (_dec = (0, _mobxReact.inject)('appState'), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_React$Component) {\n  _inherits(TopicList, _React$Component);\n\n  function TopicList() {\n    _classCallCheck(this, TopicList);\n\n    var _this = _possibleConstructorReturn(this, _React$Component.call(this));\n\n    _this.changeName = _this.changeName.bind(_this);\n    return _this;\n  }\n\n  TopicList.prototype.componentDidMount = function componentDidMount() {};\n\n  TopicList.prototype.bootstrap = function bootstrap() {\n    var _this2 = this;\n\n    return new Promise(function (resolve) {\n      setTimeout(function () {\n        _this2.props.appState.count = 3;\n        resolve(true);\n      });\n    });\n  };\n\n  TopicList.prototype.changeName = function changeName(event) {\n    var changeName = this.props.appState.changeName;\n\n    changeName(event.target.value);\n  };\n\n  TopicList.prototype.render = function render() {\n    var appState = this.props.appState;\n\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        _reactHelmet2.default,\n        null,\n        _react2.default.createElement(\n          'title',\n          null,\n          'this is topic list'\n        ),\n        _react2.default.createElement('meta', { name: 'discription', content: 'This is description' })\n      ),\n      _react2.default.createElement('input', { type: 'text', onChange: this.changeName }),\n      appState.msg\n    );\n  };\n\n  // @ts-ignore\n  TopicList.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  };\n\n  return TopicList;\n}(_react2.default.Component), _class2.defaultProps = {\n  appState: {\n    changeName: function changeName(a) {\n      return a;\n    }\n  }\n}, _temp)) || _class) || _class);\n\n\nTopicList.propTypes = {\n  appState: _propTypes2.default.instanceOf(_appState2.default)\n};\n\nvar _default = TopicList;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/.4.3.5@react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(TopicList, 'TopicList', 'E:/_projects/react-ssr/src/views/topic-list/index.jsx');\n  reactHotLoader.register(_default, 'default', 'E:/_projects/react-ssr/src/views/topic-list/index.jsx');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.4.17.1@webpack/buildin/module.js */ \"./node_modules/.4.17.1@webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/views/topic-list/index.jsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx\");\n\n//# sourceURL=webpack:///external_%22mobx%22?");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");\n\n//# sourceURL=webpack:///external_%22mobx-react%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });