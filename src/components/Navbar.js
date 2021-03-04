import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Mind Your Fitness</Link>
        <div>
          <ul>
            <li>
              <Link to="/">Workout Log</Link>
            </li>
            <li>
              <Link to="/">Add Workout</Link>
            </li>
            <li>
              <Link to="/">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
