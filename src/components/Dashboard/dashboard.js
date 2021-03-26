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
    const { workouts = [] } = this.context;
    return (
      <section>
        <div>
          <h3>Logged Workouts</h3>
          <table>
            <thread>
              <tr>
                <th>Workout</th>
                <th>Duration</th>
                <th>Date</th>
              </tr>
            </thread>
            <tbody> Testing</tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Dashboard;
