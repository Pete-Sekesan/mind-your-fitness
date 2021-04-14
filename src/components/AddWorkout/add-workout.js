import React, { Component, Fragment } from "react";
import AuthAPIService from "../../services/auth-api-service";
import Context from "../../Context";
import "./add-workout.css";

class AddWorkout extends Component {
  static contextType = Context;
  handleSubmit = (e) => {
    //console.log("This is handle submit");
    e.preventDefault();
    const { workout_name, duration, date_created } = e.target;
    //console.log( "Handle submit" + workout_name.value + duration.value + date_created.value);

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
        //console.log("catch looking for anything");
      });
  };

  render() {
    return (
      <Fragment>
        <div>
          <h2>Add Your Workout</h2>
        </div>

        <div className="form">
          <form className="form-inline" onSubmit={this.handleSubmit}>
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
              <button type="submit" value="Add Workout">
                Add Workout
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default AddWorkout;
