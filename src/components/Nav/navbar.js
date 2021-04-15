import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./navbar.css";
import Context from "../../Context";
import NavLogo from "../../assets/logos/white_logo_transparent_background.png";

class Navbar extends Component {
  static contextType = Context;
  //clears bearer token on logout
  logout = () => {
    TokenService.clearAuthToken();
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav__logo">
          <Link to="/">
            <img src={NavLogo} alt="logo" />
          </Link>
        </div>

        <div>
          <ul>
            {/* if a token is present, display the following links*/}
            {TokenService.hasAuthToken() ? (
              <Fragment>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>

                <li>
                  <Link to="/add">Add Workout</Link>
                </li>

                <li>
                  <Link to="/" onClick={() => this.logout()}>
                    Logout
                  </Link>
                </li>
              </Fragment>
            ) : (
              //if no token is present, show the following links
              <Fragment>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
