"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable */
var _default = {
  //creates an auth token
  saveAuthToken: function saveAuthToken(token) {
    window.localStorage.setItem(_config["default"].TOKEN_KEY, token);
  },
  //confirms if a token is present in local storage
  hasAuthToken: function hasAuthToken() {
    return window.localStorage.getItem(_config["default"].TOKEN_KEY);
  },
  //removes the token from the local storage, logging the user out
  clearAuthToken: function clearAuthToken() {
    window.localStorage.removeItem(_config["default"].TOKEN_KEY);
  }
};
exports["default"] = _default;