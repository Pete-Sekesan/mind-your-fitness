import React, { Component, Fragment } from "react";
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
  //displays a table via JSX to
  render() {
    return (
      <Fragment>
        <div>
          <h2>Logged Workouts</h2>
        </div>
        <div className="workout-container">
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
                  {/*takes date input and removes the time stamp for display*/}
                  <td>{new Date(workout.date_created).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
