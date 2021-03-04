import React, { Component, Fragment } from "react";

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
              </div>
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default UserLogin;
