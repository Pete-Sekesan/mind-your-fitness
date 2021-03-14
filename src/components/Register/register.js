import React, { Component, Fragment } from "react";
import AuthAPIService from "../../services/auth-api-service";

import "./register.css";

class Register extends Component {
  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = e.target;
    this.setState({ error: null });
    AuthAPIService.postUser({
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        this.props.history.push("/login");
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
            <p>Register</p>
            <form onSubmit={this.handleSubmit}>
              {this.state.error && <p className="error">{this.state.error}</p>}
              <div>
                <label>Username:</label>
                <input type="text" required name="username" />
                <label>Password:</label>
                <input type="password" required name="password" />
                <label>Confirm Password:</label>
                <input type="password" required name="confirmPassword" />
                <br />
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Register;
