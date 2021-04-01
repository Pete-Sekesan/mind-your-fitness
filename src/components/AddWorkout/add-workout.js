import React, { Component, Fragment } from "react";
import AuthAPIService from "../../services/auth-api-service";
import "./add-workout.css";

class AddWorkout extends Component {
  handleSubmit = (e) => {
    console.log("This is handle submit");
    e.preventDefault();
    const { workout_name, duration, date_created } = e.target;
    console.log("Handle submit" + workout_name.value);

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
    return (
      <Fragment>
        <section>
          <div>
            <h1>Add Your Workout</h1>
          </div>

          <form onSubmit={this.handleSubmit}>
            <label>Exercise:</label>
            <select id="workouts" name="workout_name">
              <option value="Running">Running</option>
              <option value="Walking">Walking</option>
              <option value="Hiking">Hiking</option>
              <option value="Swimming">Swimming</option>
              <option value="Cycling">Cycling</option>
              <option value="Spin">Spin</option>
              <option value="Weightlifting">Weightlifting</option>
              <option value="Yoga">Yoga</option>
              <option value="HIIT">HIIT</option>
              <option value="Elliptical">Elliptical</option>
              <option value="Other">Other</option>
            </select>

            <div>
              <label>Duration (in minutes): </label>
              <input type="number" min="0" required name="duration" />
            </div>

            <div className="form-group">
              <label>Date: </label>
              <input type="date" name="date_created" />
            </div>
            <div>
              <input type="submit" value="Add Workout" />
            </div>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default AddWorkout;
