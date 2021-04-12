import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logo_transparent_background.png";

import "./landing-page.css";

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="landing__logo">
          <img src={Logo} alt="logo" />
        </div>

        <section className="landing">
          <h1>Welcome to Mind Your Fitness</h1>
          <div className="landing-description">
            <article className="landing-description__item">
              <h3>What is Mind Your Fitness?</h3>
              <br />
              <p>
                This app was created to allow users to have a small, standalone
                application to log and keep track of their exercise's and to
                view them all in one central location. Setting up an account is
                easy. Just create a user name and password and you will be able
                to select from a list of predefined workouts. If you want to
                take a look around as well, you can log in with our Demo Account
                to give it a shot.
              </p>
            </article>
            <article className="landing-description__item">
              <h3>How to use it</h3>
              <br />
              <p>
                This app was created to allow users to have a small, standalone
                application to log and keep track of their exercise's and to
                view them all in one central location. Setting up an account is
                easy. Just create a user name and password and you will be able
                to select from a list of predefined workouts. If you want to
                take a look around as well, you can log in with our Demo Account
                to give it a shot.
              </p>
            </article>
            <article className="landing-description__item">
              <h3>Coming soon...</h3>
              <br />
              <p>
                This app was created to allow users to have a small, standalone
                application to log and keep track of their exercise's and to
                view them all in one central location. Setting up an account is
                easy. Just create a user name and password and you will be able
                to select from a list of predefined workouts. If you want to
                take a look around as well, you can log in with our Demo Account
                to give it a shot.
              </p>
            </article>
          </div>
          <br />
          <button className="btn">
            <Link to="/login">Get Started</Link>
          </button>
        </section>
      </Fragment>
    );
  }
}

export default LandingPage;
