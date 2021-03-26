import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import Context from "../../Context";
import { API_BASE_URL } from "../../config";
import AuthAPIService from "../../services/auth-api-service";

import "./user-login.css";

class UserLogin extends Component {
  state = {
    error: null,
  };
  static contextTypes = Context;

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const user = {
      username: username.value,
      password: password.value,
    };
    AuthAPIService.userLogin(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.props.history.push("./dashboard");
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
            <p>User Login</p>
            <form className="login-form" onSubmit={this.handleLogin}>
              {this.state.error && <p>{this.state.error}</p>}
              <div>
                <label>Username:</label>
                <input type="text" required name="username" value="Demo" />
                <label>Password:</label>
                <input
                  type="password"
                  required
                  name="password"
                  value="P@ssword1234"
                />
                <br />
                <button type="submit">Log In</button>
                <br />
                <br />
                <br />
                <button className="start-btn">
                  <Link to="/register">New User? Register Here</Link>
                </button>
              </div>
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default UserLogin;
