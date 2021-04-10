import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing-page.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Mind Your Fitness</h1>
        <p>Welcome to Mind Your Fitness</p>
        <p>
          This app was created to allow users to have a small, standalone
          application to log and keep track of their exercise's and to view them
          all in one central location. Setting up an account is easy. Just
          create a user name and password and you will be able to select from a
          list of predefined workouts. If you want to take a look around as
          well, you can log in with our Demo Account to give it a shot.
        </p>
        <br />
        <button className="start-btn">
          <Link to="/login">Get Started</Link>
        </button>
      </div>
    );
  }
}

export default LandingPage;
