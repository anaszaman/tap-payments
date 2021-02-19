'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UIStore = require('./UIStore.js');

var _UIStore2 = _interopRequireDefault(_UIStore);

var _ConfigStore = require('./ConfigStore.js');

var _ConfigStore2 = _interopRequireDefault(_ConfigStore);

var _ApiStore = require('./ApiStore.js');

var _ApiStore2 = _interopRequireDefault(_ApiStore);

var _FormStore = require('./FormStore');

var _FormStore2 = _interopRequireDefault(_FormStore);

var _LocalizationStore = require('./LocalizationStore');

var _LocalizationStore2 = _interopRequireDefault(_LocalizationStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RootStore = function RootStore() {
  _classCallCheck(this, RootStore);

  if (!window._babelPolyfill) {
    require("@babel/polyfill");
    //console.log('after @babel-polyfill');
  }

  this.localizationStore = new _LocalizationStore2.default(this);
  this.configStore = new _ConfigStore2.default(this);
  this.apiStore = new _ApiStore2.default(this);
  this.uIStore = new _UIStore2.default(this);
  this.formStore = new _FormStore2.default(this);
};

var Store = new RootStore();
exports.default = Store;