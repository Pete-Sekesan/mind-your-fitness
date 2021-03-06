import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Nav/navbar";
import Dashboard from "./components/Dashboard/dashboard";
import EditWorkout from "./components/EditWorkout/edit-workout";
import AddWorkout from "./components/AddWorkout/add-workout";
import UserLogin from "./components/Login/user-login";
import LandingPage from "./components/Landing/landing-page";
import Register from "./components/Register/register";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navbar} />
        <br />
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/edit/:id" component={EditWorkout} />
        <Route path="/add" component={AddWorkout} />
        <Route path="/login" component={UserLogin} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
