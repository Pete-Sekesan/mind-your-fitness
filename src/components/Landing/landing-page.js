import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/landing-workout.jpeg";

import "./landing-page.css";

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="landing__logo-container">
            <h1 className="header-text">Welcome to Mind Your Fitness</h1>
            <img src={Image} alt="man tieing shoes" />
          </div>
        </section>
        <section className="landing">
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
                Once logged in for the first time, go ahead and select the "Add
                Workout" option. From there, you can select from a predetermined
                set of popular exercises. Once you have selected the chosen
                workout, enter the amount of time you worked out for in minutes.
                Finally, go ahead a select the date it was done on. You can even
                go back and add workouts from prior days in the year. Enjoy!
              </p>
            </article>
            <article className="landing-description__item">
              <h3>Coming soon...</h3>
              <br />
              <p>
                The goal of this application is to keep it incredibly simple.
                That being said, there will be some additions coming in the near
                future including but not limited to:
                <br />
                <br />
                <ul>
                  <li>Weight Tracking</li>
                  <li>Body Measurement Tracking</li>
                  <li>Data Visualization</li>
                </ul>
              </p>
            </article>
          </div>
          <br />
          <button>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Get Started
            </Link>
          </button>
        </section>
      </Fragment>
    );
  }
}

export default LandingPage;
