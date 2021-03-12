import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">Mind Your Fitness</Link>
        <div>
          <ul>
            <li>
              <Link to="/dashboard">Workouts</Link>
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
