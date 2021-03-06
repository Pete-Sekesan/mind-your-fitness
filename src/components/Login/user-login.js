import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./user-login.css";

class UserLogin extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div>
            <p>User Login</p>
            <form>
              <div>
                <label>Username:</label>
                <input type="text" required />
                <label>Password:</label>
                <input type="password" required />
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
