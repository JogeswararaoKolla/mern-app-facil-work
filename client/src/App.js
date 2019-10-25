import React, { Component } from "react";
import { Container } from "./components/Grid";
import LoginForm from "./components/Signup-Login/login-form";
import Signin from "./components/Signup-Login/Signin.js";
import Signup from "./components/Signup-Login/Signup.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./components/navbar/navbar";
import TimeSheet from "./components/timesheet/timesheet.js";
import TimeSheetForm from "./components/timesheet-form/timesheet-form.js";
import ManagerInputForm from "./components/ManagerInput/index.js";
import MatProcurmentForm from "./components/matprocurment-form/matprocurment-form";
import Manager1 from "./components/Manager1/index.js";

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
