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
    global.MoonLoader = mod.exports;
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

  var moon = (0, _emotion.keyframes)('100%{transform:rotate(360deg)}');

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.moonSize = function () {
        return _this.props.size / 7;
      }, _this.ballStyle = function (size) {
        return (0, _emotion.css)('{width:', size, 'px;height:', size, 'px;border-radius:100%;}');
      }, _this.wrapper = function () {
        return (0, _emotion.css)('{position:relative;width:', _this.props.size + _this.moonSize() * 2, 'px;height:', _this.props.size + _this.moonSize() * 2, 'px;animation:', moon, ' 0.6s 0s infinite linear;animation-fill-mode:forwards;}');
      }, _this.ball = function () {
        return (0, _emotion.css)('composes:', _this.ballStyle(_this.moonSize()), ';background-color:', _this.props.color, ';opacity:0.8;position:absolute;top:', _this.props.size / 2 - _this.moonSize() / 2, 'px;animation:', moon, ' 0.6s 0s infinite linear;animation-fill-mode:forwards;');
      }, _this.circle = function () {
        return (0, _emotion.css)('composes:', _this.ballStyle(_this.props.size), ';border:', _this.moonSize(), 'px solid ', _this.props.color, ';opacity:0.1;');
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: 'render',
      value: function render() {
        return this.props.loading ? _react2.default.createElement(
          'div',
          { className: this.wrapper() },
          _react2.default.createElement('div', { className: this.ball() }),
          _react2.default.createElement('div', { className: this.circle() })
        ) : null;
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    size: _propTypes2.default.number
  };

  Loader.defaultProps = {
    loading: true,
    color: '#000000',
    size: 60
  };

  var Component = (0, _recompose.onlyUpdateForKeys)(['loading', 'color', 'size'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});