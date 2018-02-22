(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'emotion', 'recompose'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('emotion'), require('recompose'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.emotion, global.recompose);
    global.FadeLoader = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _emotion, _recompose) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var fade = (0, _emotion.keyframes)('50%{opacity:0.3}100%{opacity:1}');

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.style = function (i) {
        return (0, _emotion.css)('{position:absolute;height:', _this.props.height, 'px;width:', _this.props.width, 'px;margin:', _this.props.margin, ';background-color:', _this.props.color, ';border-radius:', _this.props.radius, ';transition:2s;animation-fill-mode:\'both\';animation:', fade, ' 1.2s ', i * 0.12, 's infinite ease-in-out;}');
      }, _this.radius = 20, _this.quarter = _this.radius / 2 + _this.radius / 5.5, _this.wrapper = function () {
        return (0, _emotion.css)('{position:relative;font-size:0;top:', _this.radius, 'px;left:', _this.radius, 'px;width:', _this.radius * 3, 'px;height:', _this.radius * 3, 'px;}');
      }, _this.a = function () {
        return (0, _emotion.css)('composes:', _this.style(1), ';top:', _this.radius, ';left:0;');
      }, _this.b = function () {
        return (0, _emotion.css)('composes:', _this.style(2), ';top:', _this.quarter, ';left:', _this.quarter, ';transform:rotate(-45deg);');
      }, _this.c = function () {
        return (0, _emotion.css)('composes:', _this.style(3), ';top:0;left:', _this.radius, ';transform:rotate(90deg);');
      }, _this.d = function () {
        return (0, _emotion.css)('composes:', _this.style(4), ';top:', -_this.quarter, ';left:', _this.quarter, ';transform:rotate(45deg);');
      }, _this.e = function () {
        return (0, _emotion.css)('composes:', _this.style(5), ';top:', -_this.radius, ';left:0;');
      }, _this.f = function () {
        return (0, _emotion.css)('composes:', _this.style(6), ';top:', -_this.quarter, ';left:', -_this.quarter, ';transform:rotate(-45deg);');
      }, _this.g = function () {
        return (0, _emotion.css)('composes:', _this.style(7), ';top:0;left:', -_this.radius, ';transform:rotate(90deg);');
      }, _this.h = function () {
        return (0, _emotion.css)('composes:', _this.style(8), ';top:', _this.quarter, ';left:', -_this.quarter, ';transform:rotate(45deg);');
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: 'render',
      value: function render() {
        return this.props.loading ? _react2.default.createElement(
          'div',
          { className: this.wrapper() },
          _react2.default.createElement('div', { className: this.a() }),
          _react2.default.createElement('div', { className: this.b() }),
          _react2.default.createElement('div', { className: this.c() }),
          _react2.default.createElement('div', { className: this.d() }),
          _react2.default.createElement('div', { className: this.e() }),
          _react2.default.createElement('div', { className: this.f() }),
          _react2.default.createElement('div', { className: this.g() }),
          _react2.default.createElement('div', { className: this.h() })
        ) : null;
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    height: _propTypes2.default.number,
    width: _propTypes2.default.number,
    margin: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Loader.defaultProps = {
    loading: true,
    color: '#000000',
    height: 15,
    width: 5,
    margin: '2px',
    radius: 2
  };

  var Component = (0, _recompose.onlyUpdateForKeys)(['loading', 'color', 'height', 'width', 'margin', 'radius'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});