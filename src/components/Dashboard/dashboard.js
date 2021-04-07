import React, { Component } from "react";
import AuthAPIService from "../../services/auth-api-service";
import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { workouts: [] };
  }

  componentDidMount() {
    AuthAPIService.getWorkout()
      .then((workouts) => {
        this.setState({ workouts });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  }

  render() {
    return (
      <section>
        <div>
          <h3>Logged Workouts</h3>
          <table className="workout-table">
            <tr>
              <th>Workout</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>

            <tbody>
              {this.state.workouts.map((workout) => (
                <tr key={workout.id}>
                  <td>{workout.workout_name}</td>
                  <td>{workout.duration} Minutes</td>
                  <td>{workout.date_created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Dashboard;
