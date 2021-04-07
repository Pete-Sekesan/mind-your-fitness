/* eslint-disable */
import config from "../config";
import TokenService from "./token-service";

export default {
  postUser(user) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/${config.API_ENDPOINT}/api/users`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postWorkout(workout) {
    console.log("inside post workout" + JSON.stringify(workout));
    const token = "bearer " + TokenService.hasAuthToken();
    return fetch(
      `https://cors-anywhere.herokuapp.com/${config.API_ENDPOINT}/api/workouts`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(workout),
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getWorkout(workout) {
    const token = "bearer " + TokenService.hasAuthToken();
    return fetch(
      `https://cors-anywhere.herokuapp.com/${config.API_ENDPOINT}/api/workouts`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(workout),
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  userLogin(user) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/${config.API_ENDPOINT}/api/auth/login`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};
