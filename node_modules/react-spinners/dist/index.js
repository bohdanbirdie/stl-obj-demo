(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './spinners/BarLoader', './spinners/BeatLoader', './spinners/BounceLoader', './spinners/CircleLoader', './spinners/ClipLoader', './spinners/ClimbingBoxLoader', './spinners/DotLoader', './spinners/FadeLoader', './spinners/GridLoader', './spinners/HashLoader', './spinners/MoonLoader', './spinners/PacmanLoader', './spinners/PropagateLoader', './spinners/PulseLoader', './spinners/RingLoader', './spinners/RiseLoader', './spinners/RotateLoader', './spinners/ScaleLoader', './spinners/SyncLoader'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./spinners/BarLoader'), require('./spinners/BeatLoader'), require('./spinners/BounceLoader'), require('./spinners/CircleLoader'), require('./spinners/ClipLoader'), require('./spinners/ClimbingBoxLoader'), require('./spinners/DotLoader'), require('./spinners/FadeLoader'), require('./spinners/GridLoader'), require('./spinners/HashLoader'), require('./spinners/MoonLoader'), require('./spinners/PacmanLoader'), require('./spinners/PropagateLoader'), require('./spinners/PulseLoader'), require('./spinners/RingLoader'), require('./spinners/RiseLoader'), require('./spinners/RotateLoader'), require('./spinners/ScaleLoader'), require('./spinners/SyncLoader'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.BarLoader, global.BeatLoader, global.BounceLoader, global.CircleLoader, global.ClipLoader, global.ClimbingBoxLoader, global.DotLoader, global.FadeLoader, global.GridLoader, global.HashLoader, global.MoonLoader, global.PacmanLoader, global.PropagateLoader, global.PulseLoader, global.RingLoader, global.RiseLoader, global.RotateLoader, global.ScaleLoader, global.SyncLoader);
    global.index = mod.exports;
  }
})(this, function (module, _BarLoader, _BeatLoader, _BounceLoader, _CircleLoader, _ClipLoader, _ClimbingBoxLoader, _DotLoader, _FadeLoader, _GridLoader, _HashLoader, _MoonLoader, _PacmanLoader, _PropagateLoader, _PulseLoader, _RingLoader, _RiseLoader, _RotateLoader, _ScaleLoader, _SyncLoader) {
  'use strict';

  var _BarLoader2 = _interopRequireDefault(_BarLoader);

  var _BeatLoader2 = _interopRequireDefault(_BeatLoader);

  var _BounceLoader2 = _interopRequireDefault(_BounceLoader);

  var _CircleLoader2 = _interopRequireDefault(_CircleLoader);

  var _ClipLoader2 = _interopRequireDefault(_ClipLoader);

  var _ClimbingBoxLoader2 = _interopRequireDefault(_ClimbingBoxLoader);

  var _DotLoader2 = _interopRequireDefault(_DotLoader);

  var _FadeLoader2 = _interopRequireDefault(_FadeLoader);

  var _GridLoader2 = _interopRequireDefault(_GridLoader);

  var _HashLoader2 = _interopRequireDefault(_HashLoader);

  var _MoonLoader2 = _interopRequireDefault(_MoonLoader);

  var _PacmanLoader2 = _interopRequireDefault(_PacmanLoader);

  var _PropagateLoader2 = _interopRequireDefault(_PropagateLoader);

  var _PulseLoader2 = _interopRequireDefault(_PulseLoader);

  var _RingLoader2 = _interopRequireDefault(_RingLoader);

  var _RiseLoader2 = _interopRequireDefault(_RiseLoader);

  var _RotateLoader2 = _interopRequireDefault(_RotateLoader);

  var _ScaleLoader2 = _interopRequireDefault(_ScaleLoader);

  var _SyncLoader2 = _interopRequireDefault(_SyncLoader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  module.exports = {
    BarLoader: _BarLoader2.default,
    BeatLoader: _BeatLoader2.default,
    BounceLoader: _BounceLoader2.default,
    CircleLoader: _CircleLoader2.default,
    ClipLoader: _ClipLoader2.default,
    ClimbingBoxLoader: _ClimbingBoxLoader2.default,
    DotLoader: _DotLoader2.default,
    FadeLoader: _FadeLoader2.default,
    GridLoader: _GridLoader2.default,
    HashLoader: _HashLoader2.default,
    MoonLoader: _MoonLoader2.default,
    PacmanLoader: _PacmanLoader2.default,
    PropagateLoader: _PropagateLoader2.default,
    PulseLoader: _PulseLoader2.default,
    RingLoader: _RingLoader2.default,
    RiseLoader: _RiseLoader2.default,
    RotateLoader: _RotateLoader2.default,
    ScaleLoader: _ScaleLoader2.default,
    SyncLoader: _SyncLoader2.default
  };
});