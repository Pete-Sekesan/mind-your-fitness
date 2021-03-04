import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import WorkoutList from "./components/workout-list";
import EditWorkout from "./components/edit-workout";
import AddWorkout from "./components/add-workout";
import UserLogin from "./components/user-login";
import LandingPage from "./components/landing-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <Route path="/" exact component={LandingPage} />
        <Route path="/workouts" component={WorkoutList} />
        <Route path="/edit/:id" component={EditWorkout} />
        <Route path="/add" component={AddWorkout} />
        <Route path="/login" component={UserLogin} />
      </div>
    </Router>
  );
}

export default App;
