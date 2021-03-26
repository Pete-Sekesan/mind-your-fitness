import React, { Component, Fragment } from "react";
import AuthAPIService from "../../services/auth-api-service";
import Context from "../../Context";
import "./add-workout.css";

class AddWorkout extends Component {
  static contextType = Context;
  handleSubmit = (e) => {
    e.preventDefault();
    const { workout_name, duration, date_created } = e.target;
    AuthAPIService.postWorkout({
      workout_name: workout_name.value,
      duration: duration.value,
      date_created: date_created.value,
    })
      .then((workout) => {
        this.context.addWorkout(workout);
        this.props.history.push("/dashboard");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { workouts = [] } = this.context;
    return (
      <Fragment>
        <section>
          <div>
            <h1>Add Your Workout</h1>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Description:</label>
              <input type="text" required />
            </form>
          </div>

          <div>
            <label>Duration (in minutes): </label>
            <input type="number" required />
          </div>

          <div className="form-group">
            <label>Date: </label>
            <input type="date" />
          </div>
          <div>
            <input type="submit" value="Add Workout" />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default AddWorkout;
