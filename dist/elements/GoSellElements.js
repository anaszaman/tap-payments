"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require("mobx-react");

var _RootStore = require("../store/RootStore.js");

var _RootStore2 = _interopRequireDefault(_RootStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import NotificationBar from './NotificationBar';


var GoSellElements = function (_Component) {
  _inherits(GoSellElements, _Component);

  function GoSellElements(props) {
    _classCallCheck(this, GoSellElements);

    return _possibleConstructorReturn(this, (GoSellElements.__proto__ || Object.getPrototypeOf(GoSellElements)).call(this, props));
  }

  _createClass(GoSellElements, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.config(this.props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _RootStore2.default.apiStore.getLocalization().then(function (result) {
        _RootStore2.default.localizationStore.strings = result;
        _RootStore2.default.localizationStore.isLoading = false;
      });

      _RootStore2.default.formStore.generateCardForm("gosell-gateway-element-container");
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.config(nextProps);
    }
  }, {
    key: "config",
    value: function config(props) {
      _RootStore2.default.configStore.setConfig(props, "GOSELLELEMENTS");
    }
  }, {
    key: "closeNotification",
    value: function closeNotification() {
      _RootStore2.default.uIStore.getErrorHandler = {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _RootStore2.default.uIStore.generateCustomNotification,
        _react2.default.createElement(
          "form",
          {
            id: "gosell-gateway-form-container",
            method: "post",
            ref: function ref(node) {
              return _this2.cardElementsRef = node;
            }
          },
          _react2.default.createElement("div", { id: "gosell-gateway-element-container" })
        )
      );
    }
  }], [{
    key: "submit",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _RootStore2.default.formStore.generateToken();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit() {
        return _ref.apply(this, arguments);
      }

      return submit;
    }()
  }]);

  return GoSellElements;
}(_react.Component);

exports.default = (0, _mobxReact.observer)(GoSellElements);