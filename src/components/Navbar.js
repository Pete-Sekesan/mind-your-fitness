import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Mind Your Fitness</Link>
        <div>
          <ul>
            <li>
              <Link to="/">Workouts</Link>
            </li>
            <li>
              <Link to="/add">Add Workout</Link>
            </li>
            <li>
              <Link to="/user">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
