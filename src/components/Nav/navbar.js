import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./navbar.css";
import Context from "../../Context";

class Navbar extends Component {
  static contextType = Context;

  logout = () => {
    TokenService.clearAuthToken();
  };
  render() {
    return (
      <nav className="navbar">
        <Link to="/">Mind Your Fitness</Link>

        <div>
          <ul>
            {TokenService.hasAuthToken() ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>

                <li>
                  <Link to="/" onClick={() => this.logout()}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
