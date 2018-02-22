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
    global.GridLoader = mod.exports;
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

  var grid = (0, _emotion.keyframes)('0%{transform:scale(1)}50%{transform:scale(0.5);opacity:0.7}100%{transform:scale(1);opacity:1}');

  var random = function random(top) {
    return Math.random() * top;
  };

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.style = function (rand) {
        return (0, _emotion.css)('{display:inline-block;background-color:', _this.props.color, ';width:', _this.props.size, ';height:', _this.props.size, ';margin:', _this.props.margin, ';border-radius:100%;animation-fill-mode:\'both\';animation:', grid, ' ', rand / 100 + 0.6, 's ', rand / 100 - 0.2, 's infinite ease;}');
      }, _this.wrapper = function () {
        return (0, _emotion.css)('{width:', parseFloat(_this.props.size) * 3 + parseFloat(_this.props.margin) * 6, 'px;font-size:0;}');
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: 'render',
      value: function render() {
        return this.props.loading ? _react2.default.createElement(
          'div',
          { className: this.wrapper() },
          _react2.default.createElement('div', { className: this.style(random(100)) }),
          _react2.default.createElement('div', { className: this.style(random(100)) }),
          _react2.default.createElement('div', { className: this.style(random(100)) }),
          _react2.default.createElement('div', { className: this.style(random(100)) }),
          _react2.default.createElement('div', { className: this.style(random(100)) }),
          _react2.default.createElement('div', { className: this.style(random(100)) }),
          _react2.default.createElement('div', { className: this.style(random(100)) }),
          _react2.default.createElement('div', { className: this.style(random(100)) }),
          _react2.default.createElement('div', { className: this.style(random(100)) })
        ) : null;
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    size: _propTypes2.default.number,
    margin: _propTypes2.default.string
  };

  Loader.defaultProps = {
    loading: true,
    color: '#000000',
    size: 15,
    margin: '2px'
  };

  var Component = (0, _recompose.onlyUpdateForKeys)(['loading', 'color', 'size', 'margin'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});