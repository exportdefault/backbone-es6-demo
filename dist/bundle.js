(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function Application() {
  _classCallCheck(this, Application);

  new _router2.default();
  Backbone.history.start();
};

$(function () {
  new Application();
});
},{"./router":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _views = require('./views');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_Backbone$Router) {
  _inherits(Router, _Backbone$Router);

  function Router() {
    _classCallCheck(this, Router);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Router).call(this, {
      routes: {
        '': 'home',
        'about': 'about'
      }
    }));
  }

  _createClass(Router, [{
    key: 'home',
    value: function home() {
      console.log('Route#home was called!');
      var view = new _views.HomeView();
      $('#app').html(view.render().$el);
    }
  }, {
    key: 'about',
    value: function about() {
      console.log('Route#about was called!');
      var view = new _views.AboutView();
      $('#app').html(view.render().$el);
    }
  }]);

  return Router;
}(Backbone.Router);

exports.default = Router;
},{"./views":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeView = function (_Backbone$View) {
  _inherits(HomeView, _Backbone$View);

  function HomeView() {
    _classCallCheck(this, HomeView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeView).apply(this, arguments));
  }

  _createClass(HomeView, [{
    key: 'initialize',
    value: function initialize() {
      this.template = $('script[name="home"]').html();
    }
  }, {
    key: 'render',
    value: function render() {
      this.$el.html(_.template(this.template));
      return this;
    }
  }]);

  return HomeView;
}(Backbone.View);

var AboutView = function (_Backbone$View2) {
  _inherits(AboutView, _Backbone$View2);

  function AboutView() {
    _classCallCheck(this, AboutView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AboutView).apply(this, arguments));
  }

  _createClass(AboutView, [{
    key: 'initialize',
    value: function initialize() {
      this.template = $('script[name="about"]').html();
    }
  }, {
    key: 'render',
    value: function render() {
      this.$el.html(_.template(this.template));
      return this;
    }
  }]);

  return AboutView;
}(Backbone.View);

exports.HomeView = HomeView;
exports.AboutView = AboutView;
},{}]},{},[1]);
