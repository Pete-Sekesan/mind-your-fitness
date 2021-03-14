import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import { API_BASE_URL } from "../../config";
import "./user-login.css";

class UserLogin extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const newUser = {
      username: username.value,
      password: password.value,
    };
    /*fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.props.history.push("/dashboard");
      })
      .catch((err) => console.error(err));*/
    TokenService.saveAuthToken("4hg3422hg34334566h");
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <Fragment>
        <section>
          <div>
            <p>User Login</p>
            <form className="login-form" onSubmit={this.handleLogin}>
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  required
                  name="username"
                  value="demo@demo.com"
                />
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
