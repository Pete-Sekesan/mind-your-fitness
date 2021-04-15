import config from "../config";
/* eslint-disable */
export default {
  //creates an auth token
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  //confirms if a token is present in local storage
  hasAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  //removes the token from the local storage, logging the user out
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
};
