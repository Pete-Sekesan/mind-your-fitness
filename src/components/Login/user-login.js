import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import Context from "../../Context";
import { API_ENDPOINT } from "../../config";
import AuthAPIService from "../../services/auth-api-service";

import "./user-login.css";

class UserLogin extends Component {
  state = {
    error: null,
  };

  handleLogin = (e) => {
    console.log("before prevent");
    e.preventDefault();
    console.log("after prevent");
    const { username, password } = e.target;
    const user = {
      username: username.value,
      password: password.value,
    };
    console.log("*****" + username.value + "***" + password.value);

    this.setState({ error: null });
    AuthAPIService.userLogin(user)
      .then((loginResponse) => {
        console.log("beforetoken");
        TokenService.saveAuthToken(loginResponse.authToken);
        console.log("after token");
        this.props.history.push("/dashboard");
        console.log("after dashboard push");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <Fragment>
        <section>
          <div>
            <h1>User Login</h1>
            <form className="login-form" onSubmit={this.handleLogin}>
              {this.state.error && <p>{this.state.error}</p>}
              <div>
                <label htmlFor="username" className="label">
                  Username:
                </label>
                <input
                  type="text"
                  required
                  name="username"
                  id="username"
                  defaultValue="Demo"
                />
                <label htmlFor="password" className="label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  name="password"
                  defaultValue="P@ssword1234"
                />
                <br />
                <button type="submit" className="button-login">
                  Log In
                </button>
                <br />
                <br />
                <br />
              </div>
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default UserLogin;
