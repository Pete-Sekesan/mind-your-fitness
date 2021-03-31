"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config"));

var _tokenService = _interopRequireDefault(require("./token-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  postUser: function postUser(user) {
    return fetch("".concat(_config["default"].API_ENDPOINT, "/api/users"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(function (res) {
      return !res.ok ? res.json().then(function (e) {
        return Promise.reject(e);
      }) : res.json();
    });
  },
  postWorkout: function postWorkout(workout) {
    var token = "bearer" + _tokenService["default"].hasAuthToken();

    return fetch("".concat(_config["default"].API_ENDPOINT, "/api/workouts"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(workout)
    }).then(function (res) {
      return !res.ok ? res.json().then(function (e) {
        return Promise.reject(e);
      }) : res.json();
    });
  },
  getWorkout: function getWorkout(workout) {
    var token = "bearer" + _tokenService["default"].hasAuthToken();

    return fetch("".concat(_config["default"].API_ENDPOINT, "/api/workouts"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(workout)
    }).then(function (res) {
      return !res.ok ? res.json().then(function (e) {
        return Promise.reject(e);
      }) : res.json();
    });
  },
  userLogin: function userLogin(user) {
    return fetch("".concat(_config["default"].API_ENDPOINT, "/api/auth/login"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(function (res) {
      return !res.ok ? res.json().then(function (e) {
        return Promise.reject(e);
      }) : res.json();
    });
  }
};
exports["default"] = _default;