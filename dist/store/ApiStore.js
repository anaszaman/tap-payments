'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobx = require('mobx');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _paths = require('../../webpack/paths');

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiStore = function () {
  function ApiStore(RootStore) {
    _classCallCheck(this, ApiStore);

    this.RootStore = RootStore;
  }

  _createClass(ApiStore, [{
    key: 'getLocalization',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var self, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                res = null;
                _context2.next = 4;
                return _axios2.default.post(_paths2.default.serverPath + '/localization', {}).then(function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            //console.log('localization', response);
                            res = response.data;

                          case 1:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }()).catch(function (error) {
                  //console.log("error", error);
                });

              case 4:
                _context2.next = 6;
                return res;

              case 6:
                return _context2.abrupt('return', _context2.sent);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getLocalization() {
        return _ref.apply(this, arguments);
      }

      return getLocalization;
    }()
  }, {
    key: 'generateToken',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(body) {
        var self, res, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                self = this;
                res = null, data = null;
                _context4.next = 4;
                return _axios2.default.post(_paths2.default.serverPath + '/generate', body).then(function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(response) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:

                            res = response.data;

                            //console.log('generate response', res);

                          case 1:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x3) {
                    return _ref4.apply(this, arguments);
                  };
                }()).catch(function (error) {
                  //console.log(error);
                });

              case 4:
                _context4.next = 6;
                return res;

              case 6:
                return _context4.abrupt('return', _context4.sent);

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function generateToken(_x2) {
        return _ref3.apply(this, arguments);
      }

      return generateToken;
    }()
  }, {
    key: 'getIP',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var self, header, res;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = this;
                header = {
                  'Content-Type': 'application/json'
                };
                res = null;
                _context6.next = 5;
                return _axios2.default.get('https://api.ipify.org?format=jsonp&callback=', header).then(function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(response) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            //console.log('ip', response);
                            if (response.status == 200) {
                              res = eval(response.data).ip;
                              console.log('res ip', res);
                            }

                          case 1:
                          case 'end':
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));

                  return function (_x4) {
                    return _ref6.apply(this, arguments);
                  };
                }()).catch(function (error) {
                  console.log("error", error);
                });

              case 5:
                _context6.next = 7;
                return res;

              case 7:
                return _context6.abrupt('return', _context6.sent);

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getIP() {
        return _ref5.apply(this, arguments);
      }

      return getIP;
    }()
  }]);

  return ApiStore;
}();

(0, _mobx.decorate)(ApiStore, {});

exports.default = ApiStore;