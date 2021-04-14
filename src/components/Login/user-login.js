import React, { Component, Fragment } from "react";
import TokenService from "../../services/token-service";
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
        <div className="form">
          <h2> User Login</h2>
          <div className="login-instructions">
            <p>
              Our Demo account login is already in place, but if you need to
              re-enter the credentials sign in with the user name as Demo and
              password as Test1234!
            </p>
          </div>
          <form className="form-inline" onSubmit={this.handleLogin}>
            {this.state.error && <p>{this.state.error}</p>}
            <div className="form-label">
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
                defaultValue="Test1234!"
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
      </Fragment>
    );
  }
}

export default UserLogin;
