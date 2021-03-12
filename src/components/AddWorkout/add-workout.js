import React, { Component, Fragment } from "react";
import "./add-workout.css";

class AddWorkout extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div>
            <h1>Add Your Workout</h1>
          </div>
          <div>
            <form>
              <label>Description:</label>
              <input type="text" required />
            </form>
          </div>

          <div>
            <label>Duration (in minutes): </label>
            <input type="text" required />
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
