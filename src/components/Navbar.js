import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">Mind Your Fitness</Link>
        <div>
          <ul>
            <li>
              <Link to="/login">User Login</Link>
            </li>
            <li>
              <Link to="/workouts">Workouts</Link>
            </li>
            <li>
              <Link to="/add">Add Workout</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
