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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

__webpack_require__(4);

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              res = _context.sent;

              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_currect_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get('/admins');

            case 2:
              res = _context3.sent;


              dispatch({
                type: FETCH_ADMINS,
                payload: res
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var GET_PRODUCTS = exports.GET_PRODUCTS = 'get_products';
var getProducts = exports.getProducts = function getProducts() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/products');

            case 2:
              res = _context.sent;

              dispatch({
                type: GET_PRODUCTS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(13);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _UserListPage = __webpack_require__(18);

var _UserListPage2 = _interopRequireDefault(_UserListPage);

var _AdminsListPage = __webpack_require__(19);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

var _NotFoundPage = __webpack_require__(21);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _ProductsListPage = __webpack_require__(22);

var _ProductsListPage2 = _interopRequireDefault(_ProductsListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  server side rendering react-router-config, exports Array of routes
exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _AdminsListPage2.default, {
    path: '/admins'
  }), _extends({}, _UserListPage2.default, {
    path: '/users'
  }), _extends({}, _ProductsListPage2.default, {
    path: '/products'
  }), _extends({}, _NotFoundPage2.default, {
    path: ''
  })]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(11);

var _compression2 = _interopRequireDefault(_compression);

var _expressHttpProxy = __webpack_require__(12);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _reactRouterConfig = __webpack_require__(5);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

var _renderer = __webpack_require__(25);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(28);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  polyfill for express (es6/7 to es5)
var app = (0, _express2.default)();
app.use((0, _compression2.default)());
//  proxy on server renderer to api server
app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:7070/', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    //  app the forwared host in header so google oauth  likes us
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

// make public folder public
app.use(_express2.default.static('public'));
//  serve '/' url
app.get('*', function (req, res) {
  //  have todo stuff before give store to renderer,
  // send the req it has the cookies
  var store = (0, _createStore2.default)(req);
  //  get which components i need to render - Matchroute
  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    // if loadData exist call it
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    // not found page ssr implentation
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);
    //  if context has url property -> it hit redirect
    if (context.url) {
      return res.redirect(301, context.url);
    }
    // context has notFound property -> it hit not exist page
    if (context.notFound) {
      res.status(404);
    }
    //  pass request req inside renderer so we can get url for staticrouter
    res.send(content);
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      ' Home componentss '
    ),
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return console.log('hit here');
        } },
      'Press me! '
    )
  );
};

exports.default = {
  component: Home
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(17);

var _Footer2 = _interopRequireDefault(_Footer);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)());
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var authButton = this.props.auth ? _react2.default.createElement(
        'a',
        { href: '/api/logout' },
        'Logout'
      ) : _react2.default.createElement(
        'a',
        { href: '/api/auth/google' },
        'Login'
      );
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-expand-md navbar-light', id: 'topmenu' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'navbar-brand center', to: '/' },
            _react2.default.createElement('img', {
              src: '/media/to_starenio.svg',
              title: '\u03A4\u03BF \u03A3\u03C4\u03B1\u03C1\u03AD\u03BD\u03B9\u03BF',
              alt: '\u03A4\u03BF \u03A3\u03C4\u03B1\u03C1\u03AD\u03BD\u03B9\u03BF',
              height: '80',
              width: '185'
            })
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'navbar-toggler',
              type: 'button',
              'data-toggle': 'collapse',
              'data-target': '#navbarSupportedContent',
              'aria-controls': 'navbarSupportedContent',
              'aria-expanded': 'false',
              'aria-label': 'Toggle navigation'
            },
            _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
            _react2.default.createElement(
              'ul',
              { className: 'navbar-nav mr-auto' },
              _react2.default.createElement(
                'li',
                { className: 'nav-item' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: 'nav-link', to: '/products' },
                  _react2.default.createElement('img', { src: 'media/tourtes_genethlion.svg', alt: '\u03A4\u03BF\u03CD\u03C1\u03C4\u03B5\u03C2 \u0393\u03B5\u03BD\u03B5\u03B8\u03BB\u03AF\u03C9\u03BD', title: '\u03A4\u03BF\u03CD\u03C1\u03C4\u03B5\u03C2 \u0393\u03B5\u03BD\u03B5\u03B8\u03BB\u03AF\u03C9\u03BD', height: '70', width: '70' })
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'nav-item' },
                _react2.default.createElement(
                  'a',
                  { className: 'nav-link', href: '/products' },
                  _react2.default.createElement('img', { src: 'media/glika.svg', alt: '\u0393\u03BB\u03C5\u03BA\u03AC', title: 'glika', height: '70', width: '70' })
                )
              )
            ),
            _react2.default.createElement(
              'form',
              { className: 'form-inline my-2 my-lg-0' },
              _react2.default.createElement('input', { className: 'form-control mr-sm-2', type: 'search', placeholder: 'Search', 'aria-label': 'Search' }),
              _react2.default.createElement(
                'button',
                { className: 'btn btn-outline-success my-2 my-sm-0', type: 'submit' },
                'Search'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

function mapStateToProps(_ref) {
  var auth = _ref.auth;

  return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {

  return _react2.default.createElement('footer', null);
};

exports.default = Footer;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Component) {
  _inherits(UserList, _Component);

  function UserList() {
    _classCallCheck(this, UserList);

    return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
  }

  _createClass(UserList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }

    //  return users

  }, {
    key: 'renderUsers',
    value: function renderUsers() {
      return this.props.users.map(function (user) {
        return _react2.default.createElement(
          'li',
          { key: user.id },
          user.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          null,
          this.renderUsers()
        )
      );
    }
  }]);

  return UserList;
}(_react.Component);

function mapStateToProps(state) {
  return { users: state.users };
}

//  function that will request necessery data by dispatch
function loadData(store) {
  return store.dispatch((0, _actions.fetchUsers)());
}

//  export
exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UserList)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(2);

var _requireAuth = __webpack_require__(20);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
  _inherits(AdminsListPage, _Component);

  function AdminsListPage() {
    _classCallCheck(this, AdminsListPage);

    return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
  }

  _createClass(AdminsListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAdmins();
    }
  }, {
    key: 'renderAdmins',
    value: function renderAdmins() {
      return this.props.admins.map(function (admin) {
        return _react2.default.createElement(
          'li',
          { key: admin.id },
          admin.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        ' protected area ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'ul',
          null,
          this.renderAdmins()
        )
      );
    }
  }]);

  return AdminsListPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var admins = _ref.admins;

  return { admins: admins };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchAdmins)());
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: 'render',
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(
              'div',
              null,
              'You shouldn\'t be here!',
              _react2.default.createElement(
                _reactRouterDom.Redirect,
                { to: '/' },
                'Leave'
              )
            );
          case null:
            return _react2.default.createElement(
              'div',
              null,
              'Loading... '
            );
          default:
            // must pass props to the child
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }
  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  //  staticContext object which will be modifed when we go to a not found
  // staticContext = context of StaticRoutes
  staticContext.notFound = true;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      ' \u039A\u03AC\u03C4\u03B9 \u03C0\u03AE\u03B3\u03B5 \u03C3\u03C4\u03C1\u03B1\u03B2\u03AC \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C3\u03C5\u03BD\u03C4\u03B1\u03B3\u03AE \u03BA\u03B1\u03B9 \u03C4\u03BF \u03B3\u03BB\u03C5\u03BA\u03CC \u03B4\u03B5\u03BD \u03BC\u03B1\u03C2 \u03C0\u03AD\u03C4\u03C5\u03C7\u03B5 '
    )
  );
};

exports.default = {
  component: NotFound
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _product = __webpack_require__(4);

var _ProductList = __webpack_require__(23);

var _ProductList2 = _interopRequireDefault(_ProductList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductListPage = function (_Component) {
  _inherits(ProductListPage, _Component);

  function ProductListPage() {
    _classCallCheck(this, ProductListPage);

    return _possibleConstructorReturn(this, (ProductListPage.__proto__ || Object.getPrototypeOf(ProductListPage)).apply(this, arguments));
  }

  _createClass(ProductListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getProducts();
    }

    //  return users

  }, {
    key: 'renderProducts',
    value: function renderProducts() {
      return this.props.products;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_ProductList2.default.component, null);
    }
  }]);

  return ProductListPage;
}(_react.Component);

function mapStateToProps(state) {
  return { products: state.products };
}

//  function that will request necessery data by dispatch
function loadData(store) {
  return store.dispatch((0, _product.getProducts)());
}

//  export
exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { getProducts: _product.getProducts })(ProductListPage)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _product = __webpack_require__(4);

var _ProductListItem = __webpack_require__(24);

var _ProductListItem2 = _interopRequireDefault(_ProductListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductList = function (_Component) {
  _inherits(ProductList, _Component);

  function ProductList() {
    _classCallCheck(this, ProductList);

    return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));
  }

  _createClass(ProductList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getProducts();
    }

    //  return users

  }, {
    key: 'renderProducts',
    value: function renderProducts() {
      return this.props.products.map(function (product) {
        return _react2.default.createElement(_ProductListItem2.default, { product: product, key: product._id });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container py-2' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          this.renderProducts()
        )
      );
    }
  }]);

  return ProductList;
}(_react.Component);

function mapStateToProps(state) {
  return { products: state.products };
}

//  function that will request necessery data by dispatch
function loadData(store) {
  return store.dispatch((0, _product.getProducts)());
}

//  export
exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { getProducts: _product.getProducts })(ProductList)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductListItem = function (_Component) {
  _inherits(ProductListItem, _Component);

  function ProductListItem() {
    _classCallCheck(this, ProductListItem);

    return _possibleConstructorReturn(this, (ProductListItem.__proto__ || Object.getPrototypeOf(ProductListItem)).apply(this, arguments));
  }

  _createClass(ProductListItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}

    //  return users

  }, {
    key: 'renderProducts',
    value: function renderProducts() {
      var product = this.props.product;


      return _react2.default.createElement(
        'div',
        { className: 'card p-2 my-3' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/product/' + product.slug },
          _react2.default.createElement('img', { className: 'card-img-top', src: product.img, alt: product.title })
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-block' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/product/' + product.slug },
            _react2.default.createElement(
              'h5',
              { className: 'card-title' },
              product.title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'card-text' },
            _react2.default.createElement(
              'div',
              { className: 'product-price' },
              product.price,
              '\u20AC/',
              product.unit
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/product/' + product.slug, className: 'btn btn-warning' },
              '\u0391\u03B3\u03BF\u03C1\u03AC\u03C3\u03C4\u03B5'
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3' },
        this.renderProducts()
      );
    }
  }]);

  return ProductListItem;
}(_react.Component);

//  export


exports.default = ProductListItem;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(26);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(27);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  protect from xss attack. DAMNED HACKERS!
exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    )
  ));

  return '\n  <html>\n    <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <style>.navbar { height:92px;background:#fff999;border-bottom: 2px solid rgb(237, 108, 22); }</style>\n    <script>\n      var cb = function() {\n      var l = document.createElement(\'link\'); l.rel = \'stylesheet\';\n      l.href = \'styles/custom.css\';\n      var h = document.getElementsByTagName(\'head\')[0]; h.parentNode.insertBefore(l, h); };\n      var raf = requestAnimationFrame || mozRequestAnimationFrame ||\n                webkitRequestAnimationFrame || msRequestAnimationFrame;\n      if (raf) raf(cb);\n      else window.addEventListener(\'load\', cb);\n      var cb2 = function() {\n        var l = document.createElement(\'link\'); l.rel = \'stylesheet\';\n        l.href = \'styles/bootstrap.min.css\';\n        var h = document.getElementsByTagName(\'head\')[0]; h.parentNode.insertBefore(l, h); };\n        if (raf) raf(cb2);\n        else window.addEventListener(\'load\', cb2);\n    </script>\n    </head>\n    <body style="margin:0px;padding:0px;background: #fff999;">\n    <div id="root">' + content + '</div>\n    <script>\n    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n    </script>\n    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>\n    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>\n    <script src="bundle.js"></script>\n    <noscript>    <link rel="stylesheet" href="styles/bootstrap.min.css">\n    <link rel="stylesheet" href="styles/custom.css"></noscript>\n    <script> window.onload = function() {\n      document.getElementById(\'topmenu\').style.height = "auto";\n    }\n    </script>\n </body>\n  </html>';
};
// render routes from Routes array

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(30);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(31);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  //  server act as proxy copy and forward the cookie from browser
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://localhost:7070/',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
  return store;
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _usersReducer = __webpack_require__(32);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(33);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(34);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

var _productsReducer = __webpack_require__(35);

var _productsReducer2 = _interopRequireDefault(_productsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default,
  auth: _authReducer2.default,
  admins: _adminsReducer2.default,
  products: _productsReducer2.default
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

var _actions = __webpack_require__(2);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _product = __webpack_require__(4);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _product.GET_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ })
/******/ ]);