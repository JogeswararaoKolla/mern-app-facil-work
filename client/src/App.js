import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import { Container } from "./components/Grid";
import LoginForm from "./components/Signup-Login/login-form";
import Signin from "./components/Signup-Login/Signin.js";
import Signup from "./components/Signup-Login/Signup.js";

import Welcome from "./components/Welcome";
import TimeSheet from "./components/timesheet/timesheet.js";
import TimeSheetForm from "./components/timesheet-form/timesheet-form.js";
import ManagerInputForm from "./components/ManagerInput/index.js";
import MatProcurmentForm from "./components/matprocurment-form/matprocurment-form";
import Manager1 from "./components/Manager1/index";

class App extends Component {
  state = {
    firstName: "",
    role: ""
  };

  render() {
    return (
      <Router>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Signin} />
        <Route exact path="/welcome" component={Welcome} />
      </Router>
    );
  }
}

export default App;
