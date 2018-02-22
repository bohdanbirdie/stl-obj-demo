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
    global.PacmanLoader = mod.exports;
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

  // This returns an animation
  var pacman = [(0, _emotion.keyframes)('0%{transform:rotate(0deg)}50%{transform:rotate(-44deg)}'), (0, _emotion.keyframes)('0%{transform:rotate(0deg)}50%{transform:rotate(44deg)}')];

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.ball = function () {
        return (0, _emotion.keyframes)('75%{opacity:0.7}100%{transform:translate(', -4 * _this.props.size, 'px,', -_this.props.size / 4, 'px)}');
      }, _this.ballStyle = function (i) {
        return (0, _emotion.css)('{width:10px;height:10px;background-color:', _this.props.color, ';margin:', _this.props.margin, ';border-radius:100%;transform:translate(0,', -_this.props.size / 4, 'px);position:absolute;top:25px;left:100px;animation:', _this.ball(), ' 1s ', i * 0.25, 's infinite linear;animation-fill-mode:both;}');
      }, _this.s1 = function () {
        return _this.props.size + 'px solid transparent';
      }, _this.s2 = function () {
        return _this.props.size + 'px solid ' + _this.props.color;
      }, _this.pacmanStyle = function (i) {
        return (0, _emotion.css)('{width:0;height:0;border-right:', _this.s1(), ';border-top:', i === 0 ? _this.s1() : _this.s2(), ';border-left:', _this.s2(), ';border-bottom:', i === 0 ? _this.s2() : _this.s1(), ';border-radius:', _this.props.size, 'px;position:absolute;animation:', pacman[i], ' 0.8s infinite ease-in-out;animation-fill-mode:both;}');
      }, _this.wrapper = function () {
        return (0, _emotion.css)('{position:relative;font-size:0;height:', _this.props.size, 'px;width:', _this.props.size, 'px;}');
      }, _this.pac = function () {
        return _this.pacmanStyle(0);
      }, _this.man = function () {
        return (0, _emotion.css)('composes:', _this.pacmanStyle(1), ';position:absolute;');
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: 'render',
      value: function render() {
        return this.props.loading ? _react2.default.createElement(
          'div',
          { className: this.wrapper() },
          _react2.default.createElement('div', { className: this.pac() }),
          _react2.default.createElement('div', { className: this.man() }),
          _react2.default.createElement('div', { className: this.ballStyle(2) }),
          _react2.default.createElement('div', { className: this.ballStyle(3) }),
          _react2.default.createElement('div', { className: this.ballStyle(4) }),
          _react2.default.createElement('div', { className: this.ballStyle(5) })
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
    size: 25,
    margin: '2px'
  };

  var Component = (0, _recompose.onlyUpdateForKeys)(['loading', 'color', 'size', 'margin'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});