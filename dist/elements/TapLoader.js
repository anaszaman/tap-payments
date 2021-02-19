"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _loader = require("@tap-payments/loader");

var _whiteLoader = require("../assets/white-loader.json");

var shortWhiteLoader = _interopRequireWildcard(_whiteLoader);

var _blackLoader = require("../assets/black-loader.json");

var shortBlackLoader = _interopRequireWildcard(_blackLoader);

// require("../assets/css/style.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TapLoader = function (_Component) {
  _inherits(TapLoader, _Component);

  function TapLoader(props) {
    _classCallCheck(this, TapLoader);

    var _this = _possibleConstructorReturn(this, (TapLoader.__proto__ || Object.getPrototypeOf(TapLoader)).call(this, props));

    _this.state = {
      status: _this.props.status,
      type: _this.props.type,
      loader: shortWhiteLoader,
      second: true,
      duration: _this.props.duration
    };

    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  _createClass(TapLoader, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.load(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.load(nextProps);
    }
  }, {
    key: "load",
    value: function load(value) {
      this.setState({
        status: value.status,
        type: value.type,
        loader: value.color === "white" ? shortWhiteLoader : shortBlackLoader,
        second: null,
        duration: value.duration
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.props.handleClose();
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        position: "relative",
        top: 50 - Math.floor(window.innerHeight / 100) % 100 + "%"
      };

      return _react2.default.createElement(
        "div",
        {
          className: "gosell-gateway-msg",
          style: {
            backgroundColor:
            // this.props.store.uIStore.modalMode == "popup"
            // ?
            "rgba(0, 0, 0, 0.6)"
            // : "#f0f1f2"
          }
        },
        _react2.default.createElement(
          "div",
          {
            className: "gosell-gateway-msg-wrapper",
            style: window.innerWidth >= 440 ? style : { color: "" }
          },
          _react2.default.createElement(
            "div",
            {
              style: {
                width: "60px",
                height: "60px",
                margin: "auto",
                display: this.state.status ? "block" : "none"
              }
            },
            _react2.default.createElement(_loader.Loader, {
              toggleAnimation: this.state.status,
              animationData: this.state.loader,
              duration: this.state.type != "loader" ? this.state.status ? 4 : 3 : this.state.duration,
              secondData: this.state.second,
              secondDuration: 10
            })
          ),
          _react2.default.createElement(
            "p",
            {
              className: "gosell-gateway-msg-title",
              style: {
                color: this.props.color === "white" ? this.props.color : "#4b4847"
              }
            },
            this.props.title
          ),
          _react2.default.createElement(
            "p",
            {
              className: "gosell-gateway-msg-desc",
              style: {
                color: this.props.color === "white" ? "#a4a5a7" : "#797777"
              }
            },
            this.props.desc
          ),
          _react2.default.createElement("br", null)
        )
      );
    }
  }]);

  return TapLoader;
}(_react.Component);

exports.default = TapLoader;