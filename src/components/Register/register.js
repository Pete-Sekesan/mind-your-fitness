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
    //if passwords match, create the user
    if (password.value === confirmPassword.value) {
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
    }
  };
  render() {
    return (
      <Fragment>
        <div className="form">
          <h2>Register</h2>

          <form className="form-inline" onSubmit={this.handleSubmit}>
            {this.state.error && <p className="error">{this.state.error}</p>}

            <label>Username:</label>
            <input type="text" required name="username" id="username" />
            <label>Password:</label>
            <input type="password" required name="password" id="password" />
            <label>Confirm Password:</label>
            <input
              type="password"
              required
              name="confirmPassword"
              id="confirmPassword"
            />
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Register;
