"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _mobx = require("mobx");

var _NotificationBar = require("../elements/NotificationBar");

var _NotificationBar2 = _interopRequireDefault(_NotificationBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIStore = function () {
  function UIStore(RootStore) {
    _classCallCheck(this, UIStore);

    this.RootStore = RootStore;
    this.reset();
  }

  _createClass(UIStore, [{
    key: "reset",
    value: function reset() {
      this.tap_id = null;
      this.openModal = false;
      this.modalID = "gosell-lightbox-payment-gateway";
      this.modalMode = "popup";
      this.errorHandler = {};

      this.isLoading = true;
    }
  }, {
    key: "setOpenModal",
    value: function setOpenModal(value) {
      this.openModal = value;
    }
  }, {
    key: "closeNotification",
    value: function closeNotification() {
      // var self = this;

      if (this.RootStore.configStore.notifications !== "standard") {
        var el = document.getElementById(this.RootStore.configStore.notifications);
        el.innerHTML = "";
      } else {
        this.errorHandler.visable = false;
        this.errorHandler = {};
      }
    }
  }, {
    key: "setErrorHandler",
    value: function setErrorHandler(value) {
      var self = this;
      this.errorHandler = value;

      if (this.RootStore.configStore.notifications === "standard" && value.visable) {
        window.scroll(0, 0);
      }

      setTimeout(function () {
        self.closeNotification();
      }, 5000);
    }
  }, {
    key: "generateCustomNotification",
    get: function get() {
      var self = this;
      //console.log('notifications type', this.RootStore.configStore.notifications);
      //console.log('msg', this.getErrorHandler);

      if (this.RootStore.configStore.notifications !== "standard" && !this.getErrorHandler.options) {
        ////console.log('id', this.RootStore.configStore.notifications);

        var el = document.getElementById(this.RootStore.configStore.notifications);
        ////console.log('element', el);

        if (this.getErrorHandler.msg && el != null) {
          ////console.log('this is happening');
          el.innerHTML = this.getErrorHandler.msg;
        }
        setTimeout(function () {
          self.closeNotification();
        }, 5000);
      } else if (this.RootStore.configStore.notifications === "standard" || this.getErrorHandler.options) {
        return _react2.default.createElement(
          _NotificationBar2.default,
          {
            mode: this.getErrorHandler.type,
            dir: this.dir,
            close: this.closeNotification,
            show: this.getErrorHandler.visable,
            options: this.getErrorHandler.options
          },
          this.getErrorHandler.msg
        );
      }
    }
  }, {
    key: "getErrorHandler",
    get: function get() {
      return this.errorHandler;
    }
  }]);

  return UIStore;
}();

(0, _mobx.decorate)(UIStore, {
  openModal: _mobx.observable,
  modalMode: _mobx.observable,
  modalID: _mobx.observable,
  tap_id: _mobx.observable,
  errorHandler: _mobx.observable,
  isLoading: _mobx.observable
});

exports.default = UIStore;