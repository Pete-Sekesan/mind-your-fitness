"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config"));

var _tokenService = _interopRequireDefault(require("./token-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable */
var _default = {
  //register a user to the database
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
  // if a user is logged in with bearer token, post the workout to the database
  postWorkout: function postWorkout(workout) {
    var token = "bearer " + _tokenService["default"].hasAuthToken();

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
  //if the user is logged in with bearer token, view that users workouts table
  getWorkout: function getWorkout(workout) {
    var token = "bearer " + _tokenService["default"].hasAuthToken();

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
  //logs the user in if the entered user credentials matches to use in database
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