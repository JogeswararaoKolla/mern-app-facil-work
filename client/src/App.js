import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Signin from "./components/Login/Signin.js";
import Signup from "./components/Login/Signup.js";
import Welcome from "./components/Welcome";

import ManagerContainer from "./components/ManagerContainer.js";
import ManagerAddProject from "./components/ManagerAddProject.js";
import ManagerAddWorker from "./components/ManagerAddWorker.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Signin} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/managerprojects" component={ManagerContainer} />
        <Route exact path="/manageraddworker" component={ManagerAddWorker} />
        <Route exact path="/manageraddproject" component={ManagerAddProject} />
      </Router>
    );
  }
}

export default App;
