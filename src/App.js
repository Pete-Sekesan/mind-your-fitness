import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Context from "./Context";
import Navbar from "./components/Nav/navbar";
import Dashboard from "./components/Dashboard/dashboard";
import AddWorkout from "./components/AddWorkout/add-workout";
import UserLogin from "./components/Login/user-login";
import LandingPage from "./components/Landing/landing-page";
import Register from "./components/Register/register";

class App extends Component {
  state = {
    workouts: [],
    setWorkouts: (workouts) => this.setState({ workouts }),
    addWorkout: (workout) =>
      this.setState({ workouts: [...this.state.workouts, workout] }),
  };
  render() {
    return (
      <Fragment>
        <Context.Provider value={this.state}>
          <div className="App">
            <Route path="/" component={Navbar} />
            <br />
            <Route path="/" exact component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/add" component={AddWorkout} />
            <Route path="/login" component={UserLogin} />
            <Route path="/register" component={Register} />
          </div>
        </Context.Provider>
      </Fragment>
    );
  }
}

export default App;
