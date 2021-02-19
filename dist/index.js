"use strict";

require("@babel/polyfill/noConflict");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _GoSell = require("./elements/GoSell.js");

var _GoSell2 = _interopRequireDefault(_GoSell);

var _GoSellElements = require("./elements/GoSellElements.js");

var _GoSellElements2 = _interopRequireDefault(_GoSellElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  GoSell: _GoSell2.default,
  GoSellElements: _GoSellElements2.default,
  config: function config(object) {
    var URLSearchParams = require("url-search-params");

    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("tap_id")) {
      if (object.containerID && document.getElementById("gosell-gateway") == null) {
        _reactDom2.default.render(_react2.default.createElement(_GoSell2.default, { callback: object.gateway && object.gateway.callback }), document.getElementById(object.containerID));
      } else if (object.containerID == null && document.getElementById("gosell-gateway") == null) {
        var container = document.createElement("div");
        container.setAttribute("id", "gosell-js-lib");

        document.body.insertBefore(container, document.body.childNodes[0]);

        _reactDom2.default.render(_react2.default.createElement(_GoSell2.default, { callback: object.gateway && object.gateway.callback }), document.getElementById("gosell-js-lib"));
      }
    } else if (object.transaction && object.transaction.mode) {
      if (object.containerID && document.getElementById("gosell-gateway") == null) {
        _reactDom2.default.render(_react2.default.createElement(_GoSell2.default, {
          gateway: object.gateway ? object.gateway : null,
          customer: object.customer ? object.customer : null,
          order: object.order ? object.order : null,
          transaction: {
            mode: object.transaction ? object.transaction.mode : null,
            charge: object.transaction && object.transaction.charge ? object.transaction.charge : null,
            authorize: object.transaction && object.transaction.authorize ? object.transaction.authorize : null
          }
        }), document.getElementById(object.containerID));
      }
      if (object.containerID == null && document.getElementById("gosell-gateway") == null) {
        var container = document.createElement("div");
        container.setAttribute("id", "gosell-js-lib");

        document.body.insertBefore(container, document.body.childNodes[0]);

        _reactDom2.default.render(_react2.default.createElement(_GoSell2.default, {
          gateway: object.gateway ? object.gateway : null,
          customer: object.customer ? object.customer : null,
          order: object.order ? object.order : null,
          transaction: {
            mode: object.transaction ? object.transaction.mode : null,
            charge: object.transaction && object.transaction.charge ? object.transaction.charge : null,
            authorize: object.transaction && object.transaction.authorize ? object.transaction.authorize : null
          }
        }), document.getElementById("gosell-js-lib"));
      }
    }
  },
  openLightBox: function openLightBox() {
    module.exports.GoSell.openLightBox();
  },
  openPaymentPage: function openPaymentPage() {
    //this option only for charge & authorize cases
    //The function calls create charge or Authorize API
    module.exports.GoSell.openPaymentPage();
  },
  showResult: function showResult(object) {
    var URLSearchParams = require("url-search-params");

    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("tap_id")) {
      if (document.getElementById("gosell-gateway") == null) {
        var container = document.createElement("div");
        container.setAttribute("id", "gosell-js-lib");

        document.body.insertBefore(container, document.body.childNodes[0]);

        if (object && object.callback) {
          _reactDom2.default.render(_react2.default.createElement(_GoSell2.default, { callback: object.callback }), document.getElementById("gosell-js-lib"));
        } else {
          _reactDom2.default.render(_react2.default.createElement(_GoSell2.default, null), document.getElementById("gosell-js-lib"));
        }
      }
    }
  },
  goSellElements: function goSellElements(object) {
    _reactDom2.default.render(_react2.default.createElement(_GoSellElements2.default, {
      gateway: object.gateway,
      transaction: { mode: "token" }
    }), document.getElementById(object.containerID));
  },
  submit: function submit() {
    module.exports.GoSellElements.submit();
  }
};