import React, { Component } from "react";

class UserLogin extends Component {
  render() {
    return (
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
    );
  }
}

export default UserLogin;
