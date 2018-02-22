(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'emotion', 'recompose', '../helpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('emotion'), require('recompose'), require('../helpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.emotion, global.recompose, global.helpers);
    global.HashLoader = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _emotion, _recompose, _helpers) {
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

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.thickness = function () {
        return _this.props.size / 5;
      }, _this.lat = function () {
        return (_this.props.size - _this.thickness()) / 2;
      }, _this.offset = function () {
        return _this.lat() - _this.thickness();
      }, _this.color = function () {
        return (0, _helpers.calculateRgba)(_this.props.color, 0.75);
      }, _this.before = function () {
        return (0, _emotion.keyframes)('0%{width:', _this.thickness(), 'px;box-shadow:', _this.lat(), 'px ', -_this.offset(), 'px ', _this.color(), ',', -_this.lat(), 'px ', _this.offset(), 'px ', _this.color(), '}35%{width:', _this.props.size, 'px;box-shadow:0 ', -_this.offset(), 'px ', _this.color(), ',0 ', _this.offset(), 'px ', _this.color(), '}70%{width:', _this.thickness(), 'px;box-shadow:', -_this.lat(), 'px ', -_this.offset(), 'px ', _this.color(), ',', _this.lat(), 'px ', _this.offset(), 'px ', _this.color(), '}100%{box-shadow:', _this.lat(), 'px ', -_this.offset(), 'px ', _this.color(), ',', -_this.lat(), 'px ', _this.offset(), 'px ', _this.color(), '}');
      }, _this.after = function () {
        return (0, _emotion.keyframes)('0%{height:', _this.thickness(), 'px;box-shadow:', _this.offset(), 'px ', _this.lat(), 'px ', _this.color(), ',', -_this.offset(), 'px ', -_this.lat(), 'px ', _this.color(), '}35%{height:', _this.props.size, 'px;box-shadow:', _this.offset(), 'px 0 ', _this.color(), ',', -_this.offset(), 'px 0 ', _this.color(), '}70%{height:', _this.thickness(), 'px;box-shadow:', _this.offset(), 'px ', -_this.lat(), 'px ', _this.color(), ',', -_this.offset(), 'px ', _this.lat(), 'px ', _this.color(), '}100%{box-shadow:', _this.offset(), 'px ', _this.lat(), 'px ', _this.color(), ',', -_this.offset(), 'px ', -_this.lat(), 'px ', _this.color(), '}');
      }, _this.style = function (i) {
        return (0, _emotion.css)('{position:absolute;content:\'\';top:50%;left:50%;display:block;width:', _this.props.size / 5, 'px;height:', _this.props.size / 5, 'px;border-radius:', _this.props.size / 10, 'px;transform:translate(-50%,-50%);animation-fill-mode:none;animation:', i === 1 ? _this.before() : _this.after(), ' 2s infinite;}');
      }, _this.wrapper = function () {
        return (0, _emotion.css)('{position:relative;width:', _this.props.size, 'px;height:', _this.props.size, 'px;transform:rotate(165deg);}');
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: 'render',
      value: function render() {
        return this.props.loading ? _react2.default.createElement(
          'div',
          { className: this.wrapper() },
          _react2.default.createElement('div', { className: this.style(1) }),
          _react2.default.createElement('div', { className: this.style(2) })
        ) : null;
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    size: _propTypes2.default.number,
    color: _propTypes2.default.string
  };

  Loader.defaultProps = {
    loading: true,
    size: 50,
    color: '#000000'
  };

  var Component = (0, _recompose.onlyUpdateForKeys)(['loading', 'color', 'size'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});