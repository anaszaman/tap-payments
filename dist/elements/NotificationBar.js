'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// require('../assets/css/notifications.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationBar = function (_Component) {
  _inherits(NotificationBar, _Component);

  function NotificationBar(props) {
    _classCallCheck(this, NotificationBar);

    var _this = _possibleConstructorReturn(this, (NotificationBar.__proto__ || Object.getPrototypeOf(NotificationBar)).call(this, props));

    _this.state = {
      modeStyle: null,
      show: _this.props.show ? true : false
    };
    return _this;
  }

  _createClass(NotificationBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      if (this.props.mode === 'success') {
        this.setState({
          modeStyle: {
            backgroundColor: '#2ACE00',
            color: '#fff'
          }
        });
      } else if (this.props.mode === 'error') {
        this.setState({
          modeStyle: {
            backgroundColor: '#E12131',
            color: '#fff'
          }
        });
      } else if (this.props.mode === 'warning') {
        this.setState({
          modeStyle: {
            backgroundColor: '#ffbf00',
            color: '#fff'
          }
        });
      } else if (this.props.mode === 'info') {
        this.setState({
          modeStyle: {
            backgroundColor: '#009AFF',
            color: '#fff'
          }
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      if (nextProps.mode === 'success') {
        this.setState({
          modeStyle: {
            backgroundColor: '#2ACE00',
            color: '#fff'
          }
        });
      } else if (nextProps.mode === 'error') {
        this.setState({
          modeStyle: {
            backgroundColor: '#E12131',
            color: '#fff'
          }
        });
      } else if (nextProps.mode === 'warning') {
        this.setState({
          modeStyle: {
            backgroundColor: '#ffbf00',
            color: '#fff'
          }
        });
      } else if (nextProps.mode === 'info') {
        this.setState({
          modeStyle: {
            backgroundColor: '#009AFF',
            color: '#fff'
          }
        });
      }

      this.setState({
        show: nextProps.show
      });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({
        show: false
      });

      this.props.close ? this.props.close() : null;
    }
  }, {
    key: 'render',
    value: function render() {

      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

      var options = this.props.options ? this.props.options.map(function (option, index) {
        return _react2.default.createElement(
          'div',
          { className: 'tap-payments-option', key: index, onClick: option.action },
          option.title === "×" ? _react2.default.createElement(
            'a',
            { className: 'tap-payments-close' },
            option.title
          ) : option.title
        );
      }) : null;

      return _react2.default.createElement(
        'table',
        {
          dir: this.props.dir,
          className: this.state.show ? 'tap-payments-notification-bar tap-payments-notification-true' : 'tap-payments-notification-bar tap-payments-notification-false',
          style: Object.assign({}, this.state.modeStyle, this.props.style) },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              {
                align: this.props.dir == 'rtl' ? 'right' : 'left',
                className: this.props.options ? "tap-payments-notification-title" : "tap-payments-notification-title tap-payments-notification-title-centered",
                onClick: this.props.onClick },
              _react2.default.createElement(
                'div',
                { style: { textAlign: this.props.dir == 'rtl' ? 'right' : 'left' } },
                this.props.children
              )
            ),
            _react2.default.createElement(
              'td',
              {
                align: this.props.dir == 'rtl' ? 'left' : 'right',
                className: this.props.options ? "tap-payments-options" : "tap-payments-options tap-payments-options-close-only" },
              this.props.options ? options : _react2.default.createElement(
                'a',
                { className: 'tap-payments-close', onClick: this.handleClose.bind(this), title: 'close' },
                this.props.children ? "×" : ""
              )
            )
          )
        )
      );
    }
  }]);

  return NotificationBar;
}(_react.Component);

exports.default = NotificationBar;