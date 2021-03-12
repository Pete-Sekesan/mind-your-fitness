import React, { Component, Fragment } from "react";

import "./register.css";

class Register extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div>
            <p>Register</p>
            <form>
              <div>
                <label>Username:</label>
                <input type="text" required />
                <label>Password:</label>
                <input type="password" required />
                <label>Confirm Password:</label>
                <input type="password" required />
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
