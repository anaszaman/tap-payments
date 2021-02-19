'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import myjson from 'https://goselljslib.b-cdn.net/local.json';


var _mobx = require('mobx');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _paths = require('../../webpack/paths');

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalizationStore = function () {
  function LocalizationStore(RootStore) {
    _classCallCheck(this, LocalizationStore);

    this.RootStore = RootStore;
    // this.strings = require('./local.json');

    // this.strings = null;
    this.isLoading = true;
    // this.getLocalization()
    this.strings = require('./localization.json');
  }

  _createClass(LocalizationStore, [{
    key: 'getContent',
    value: function getContent(key, lang) {
      if (this.strings !== null) {
        var _defaultLang = this.RootStore.configStore.language ? this.RootStore.configStore.language.toLowerCase() : 'en';
        var _lang = lang ? lang.toLowerCase() : _defaultLang;
        if (key) {
          var txt = this.strings[key][_lang];
          if (txt) {
            // //console.log('txt',txt);
            return txt;
          } else {
            return ' ';
          }
        } else {
          return ' ';
        }
      } else {
        return ' ';
      }
    }
  }]);

  return LocalizationStore;
}();

(0, _mobx.decorate)(LocalizationStore, {
  isLoading: _mobx.observable,
  strings: _mobx.observable
});

exports.default = LocalizationStore;