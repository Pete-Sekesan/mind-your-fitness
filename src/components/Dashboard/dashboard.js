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
      <div className="workout-container">
        <h2>Logged Workouts</h2>
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
                <td>{new Date(workout.date_created).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
