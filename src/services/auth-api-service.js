import config from "../config";
import TokenService from "./token-service";

export default {
  postUser(user) {
    return fetch(`${config.API_BASE_URL}/api/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postWorkout(workout) {
    const token = "bearer" + TokenService.hasAuthToken();
    return fetch(`${config.API_BASE_URL}/api/workouts`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(workout),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};
