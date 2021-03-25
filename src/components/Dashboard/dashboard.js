import React, { Component } from "react";
import AuthAPIService from "../../services/auth-api-service";
import Context from "../../Context";
import "./dashboard.css";

class Dashboard extends Component {
  static contextType = Context;

  componentDidMount() {
    AuthAPIService.getWorkout()
      .then((workouts) => {
        this.context.setWorkout(workouts);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  }
  render() {
    return (
      <section>
        <div>
          <p>
            Testing the workout list component. This should be where all logged
            workouts reside.
          </p>
        </div>
      </section>
    );
  }
}

export default Dashboard;
